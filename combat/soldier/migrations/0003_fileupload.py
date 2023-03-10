# Generated by Django 4.1.5 on 2023-02-02 11:20

from django.db import migrations, models
import soldier.models


class Migration(migrations.Migration):

    dependencies = [
        ('soldier', '0002_alter_company_name_alter_creed_name_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='FileUpload',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(blank=True, null=True, upload_to=soldier.models.file_upload_to_directory)),
            ],
        ),
    ]
