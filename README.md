# guia_do_programador
Aulas Grátis do Youtube de NodeJS


Quando for tentar fazer a conexão com o BD MySQL, se der o erro "SequelizeConnectionError: Client does not support authentication protocol requested by server; consider upgrading MySQL client", tem que rodar essas duas queries:
ALTER USER 'usuario1'@'localhost' IDENTIFIED BY '12345678'; ALTER USER 'usuario1'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678'
