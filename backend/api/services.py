from .models import *
from .serializers import *
from django.conf import settings
from django.core.exceptions import ValidationError
from jwt import decode
from typing import Dict, Any
import requests
import jwt

GOOGLE_ACCESS_TOKEN_OBTAIN_URL = 'https://oauth2.googleapis.com/token'
GOOGLE_USER_INFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo'

def createJwtToken(validated_data):
    domain = settings.BASE_API_URL
    redirect_uri = f'{domain}/api/v1/auth/login/google/'

    code = validated_data.get('code')
    error = validated_data.get('error')
    
    login_url = f'{settings.BASE_APP_URL}/login'

    if error or not code:
        params = urlencode({'error': error})
        return redirect(f'{login_url}?{params}')

    access_token = google_get_access_token(code=code, redirect_uri=redirect_uri)

    user_data = google_get_user_info(access_token=access_token)

    try:
        User.objects.get(email = user_data['email'])
    except:
        User.objects.get_or_create(username = user_data.get('name'), email = user_data['email'], 
        first_name = user_data.get('given_name'), last_name = user_data.get('family_name'))
    
    profile_data = {
        'email': user_data['email'],
        'first_name': user_data.get('given_name'),
        'last_name': user_data.get('family_name'),
    }

    jwt_token = jwt.encode(profile_data, settings.SECRET_KEY, algorithm="HS256").decode('utf-8')

    return user_data, jwt_token

def google_get_user_info(*, access_token: str) -> Dict[str, Any]:
    response = requests.get(
        GOOGLE_USER_INFO_URL,
        params={'access_token': access_token}
    )

    if not response.ok:
        raise ValidationError('Failed to obtain user info from Google.')
    
    return response.json()

def google_get_access_token(*, code: str, redirect_uri: str) -> str:
    data = {
        'code': code,
        'client_id': settings.GOOGLE_OAUTH2_CLIENT_ID,
        'client_secret': settings.GOOGLE_OAUTH2_CLIENT_SECRET,
        'redirect_uri': redirect_uri,
        'grant_type': 'authorization_code'
    }

    response = requests.post(GOOGLE_ACCESS_TOKEN_OBTAIN_URL, data=data)
    if not response.ok:
        raise ValidationError('Failed to obtain access token from Google.')
    
    access_token = response.json()['access_token']

    return access_token

def validateJwtToken(jwt_token):
    return jwt.decode(jwt_token, 'Insecure', algorithms=["HS256"])

def getUserData(request):
    jwt_data = validateJwtToken(request.headers.get('Authorization').split(' ')[1])
    return jwt_data['email']