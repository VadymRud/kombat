# Generated by Django 4.1.5 on 2023-02-01 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('soldier', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='name',
            field=models.CharField(max_length=512, verbose_name="Ім'я"),
        ),
        migrations.AlterField(
            model_name='creed',
            name='name',
            field=models.CharField(max_length=512, verbose_name="Ім'я"),
        ),
        migrations.AlterField(
            model_name='education',
            name='name',
            field=models.CharField(max_length=512, verbose_name="Ім'я"),
        ),
        migrations.AlterField(
            model_name='militaryrank',
            name='name',
            field=models.CharField(max_length=512, verbose_name="Ім'я"),
        ),
        migrations.AlterField(
            model_name='nationality',
            name='name',
            field=models.CharField(max_length=512, verbose_name="Ім'я"),
        ),
        migrations.AlterField(
            model_name='officialposition',
            name='name',
            field=models.CharField(max_length=512, verbose_name="Ім'я"),
        ),
        migrations.AlterField(
            model_name='platoon',
            name='name',
            field=models.CharField(max_length=512, verbose_name="Ім'я"),
        ),
        migrations.AlterField(
            model_name='platoon',
            name='priorety',
            field=models.SmallIntegerField(default=1, verbose_name="Ім'я"),
        ),
        migrations.AlterField(
            model_name='region',
            name='name',
            field=models.CharField(max_length=512, verbose_name="Ім'я"),
        ),
        migrations.AlterField(
            model_name='state',
            name='name',
            field=models.CharField(max_length=512, verbose_name="Ім'я"),
        ),
        migrations.AlterField(
            model_name='unit',
            name='name',
            field=models.CharField(max_length=512, verbose_name="Ім'я"),
        ),
    ]
