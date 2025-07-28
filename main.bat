@echo off
echo Iniciando o servidor Flask...
:: Ativa o ambiente virtual, se estiver usando (opcional)
call venv\Scripts\activate

:: Define o nome do app (caso use flask run)
set FLASK_APP=app.py
set FLASK_ENV=development

:: Inicia o servidor Flask
flask run

pause
