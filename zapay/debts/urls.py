from django.urls import path
from debts.views import DebtsView

urlpatterns = [
    path('debts/', DebtsView.as_view())
]
