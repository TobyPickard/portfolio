FROM python:3.12-alpine

ENV FLAASK_APP=app
ENV FLASK_ENV=development

COPY ./requirements.txt .

EXPOSE 5000/tcp
WORKDIR /app

RUN pip install -r requirements.txt

COPY . /app

ENTRYPOINT [ "python" ]

CMD [ "python", "./app.py" ]
