# Generated by Django 4.1.5 on 2023-02-01 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staff',
            name='salary',
            field=models.PositiveBigIntegerField(blank=True, default=0, null=True, verbose_name='salary'),
        ),
        migrations.AlterField(
            model_name='staff',
            name='tariff_category',
            field=models.PositiveBigIntegerField(blank=True, default=0, null=True, verbose_name='tariff category'),
        ),
    ]
