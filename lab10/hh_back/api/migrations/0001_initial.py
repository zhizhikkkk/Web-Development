# Generated by Django 4.1.7 on 2023-04-15 18:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(default='')),
                ('city', models.CharField(max_length=255)),
                ('address', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(default='')),
                ('salary', models.FloatField(max_length=255)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.company')),
            ],
        ),
    ]
