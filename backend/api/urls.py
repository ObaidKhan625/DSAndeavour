from rest_framework import routers
from . import views
from django.urls import path

# pinnedTopicsList = views.PinnedTopicsViewSet.as_view({'get': 'list'})
# pinnedTopicsUpdate = views.PinnedTopicsViewSet.as_view({'get': 'update'})

# router = routers.DefaultRouter()
# router.register(r'pinned-topics', pinnedTopicsList, basename = 'pinned-topics-list')
# router.register(r'pinned-topics/{topicNumber}/{topicStatus}', pinnedTopicsUpdate, basename = 'pinned-topics-update')

urlpatterns = [
    path('pinned-topics/', views.PinnedTopicsViewSet.as_view({'get': 'list'}), name = 'pinned-topics-list'),
    path('pinned-topics/<int:topicNumber>/<str:topicStatus>/', views.PinnedTopicsViewSet.as_view({'get': 'update'}), name = 'pinned-topics-update'),
]