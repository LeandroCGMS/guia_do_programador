CREATE TABLE IF NOT EXISTS usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT UNSIGNED
);

INSERT INTO usuarios(nome, email, idade) values(
    "Clone Carlos Madureira de Carvalho ",
    "clone_carlos@et.com", 
    60
);  