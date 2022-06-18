from . import views
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('pinned-topics/', views.PinnedTopicsViewSet.as_view({'get': 'list'}), name = 'pinned-topics-list'),
    path('pinned-topics/<int:topicNumber>/<str:topicStatus>/', views.PinnedTopicsViewSet.as_view({'get': 'update'}), name = 'pinned-topics-update'),
    path('problem-status/', views.ProblemStatusViewSet.as_view({'get': 'retrieve'}), name = 'problem-status-list'),
    path('problem-status/<int:problemNumber>/<str:problemStatus>/', views.ProblemStatusViewSet.as_view({'get': 'update'}), name = 'problem-status-update'),
    path('problem-notes/', views.ProblemNotesViewSet.as_view({'get': 'retrieve'}), name = 'problem-notes-retrieve'),
    path('problem-notes/<int:problemId>/', views.ProblemNotesViewSet.as_view({'post': 'update'}), name = 'problem-note-update'),
    path('abc/', views.Abc.as_view({'get':'retrieve'}), name='abc'),
    # path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]