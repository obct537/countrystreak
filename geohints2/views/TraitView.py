from django.shortcuts import render
from rest_framework import viewsets

# Create your views here.

class TraitView(viewsets.ModelViewSet):
    _children = []

    @classmethod
    def register_child(cls, child):
        cls._children.append(child)

    @classmethod
    def children(cls):
        return cls._children
    

    def register_trait_view(cls):
        print(cls.__name__)
        TraitView.register_child(cls)
        return cls