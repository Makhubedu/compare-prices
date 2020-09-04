from rest_framework import serializers

class SpecialSecializer(serializers.Serializer):
    image = serializers.URLField(required=True)
    name = serializers.CharField(max_length=200)
    description = serializers.CharField(max_length=400)
    price = serializers.CharField(max_length=30)
    link = serializers.URLField(required=True)
