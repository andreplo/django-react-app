FROM python:3.12

ENV PYTHONBUFFERED=1

WORKDIR /api

RUN pip install django django-cors-headers

COPY . .

EXPOSE 8000