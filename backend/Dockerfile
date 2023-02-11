FROM python:3.8-slim
COPY ./app /usr/src/app 
COPY ./requirements.txt /usr/src/app/
WORKDIR /usr/src/app
RUN pip install --upgrade pip && pip install -r requirements.txt
WORKDIR /usr/src
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080", "--reload"]