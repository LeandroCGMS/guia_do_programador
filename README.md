# guia_do_programador
Aulas Grátis do Youtube de NodeJS


Quando for tentar fazer a conexão com o BD MySQL, se der o erro "SequelizeConnectionError: Client does not support authentication protocol requested by server; consider upgrading MySQL client", tem que rodar essas duas queries:
ALTER USER 'root'@'localhost' IDENTIFIED BY ''; ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ''
