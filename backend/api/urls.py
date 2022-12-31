from . import views
from django.urls import path

urlpatterns = [
    path('pinned-topics/', views.PinnedTopicsViewSet.as_view({'get': 'list'}), name = 'pinned-topics-list'),
    path('pinned-topics/<int:topicNumber>/<str:topicStatus>/', views.PinnedTopicsViewSet.as_view({'get': 'update'}), name = 'pinned-topics-update'),
    path('problem-status/', views.ProblemStatusViewSet.as_view({'get': 'retrieve'}), name = 'problem-status-list'),
    path('problem-status/<int:problemNumber>/<str:problemStatus>/', views.ProblemStatusViewSet.as_view({'get': 'update'}), name = 'problem-status-update'),
    path('problem-notes/', views.ProblemNotesViewSet.as_view({'get': 'retrieve'}), name = 'problem-notes-retrieve'),
    path('problem-notes/<int:problemId>/', views.ProblemNotesViewSet.as_view({'post': 'update'}), name = 'problem-note-update'),
    path('submitFeedback/', views.feedback, name = 'send-feedback'),
    path('ping/', views.ping, name = 'ping'),
    path('v1/auth/login/google/', views.GoogleLoginApi.as_view(), name='login-with-google'),
]