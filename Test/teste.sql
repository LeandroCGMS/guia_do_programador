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

DELETE FROM usuarios WHERE nome = "Victor Lima";

UPDATE usuarios SET nome = "Luiz Silva Silveira", email = "silveira@silva.com.br" WHERE nome = "Luiz Silva";