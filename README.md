## Mini-Biblioteca
Desafio 01 - Sistema para busca e gerenciamento de livros e autores em uma biblioteca

## Características do Sistema

### Livros
- Buscar todos os livros
- Buscar um livro
- Registrar um livro
- Atualizar um livro
- Deletar um livro

### Autores
- Buscar todos os autores
- Buscar um autor
- Registrar um autor
- Atualizar autor
- Deletar autor


## Regras de negócio

### Livros
- Todos os livros podem ser modificados por qualquer um
- Cada livro pode ter somente um autor

### Autores
- Todos os autores podem ser modificados por qualquer um
- Um autor pode conter vários livros


## DB MODEL
file:///home/dlnz/Downloads/model-database-biblioteca.png![image](https://user-images.githubusercontent.com/44629124/126783228-86e7df35-37af-4746-a8a4-9819658fa950.png)

```sql
Enum LifecycleStatus {
  ACTIVE
  DELETED
}

table livro {
  id int [pk, increment] // auto-increment
  nome_completo varchar(50)
  nome_resumido varchar(50)
  numero_paginas int
  sinopse varchar(200)
  genero varchar
  id_autor ref
  
  status LifecycleStatus

  created_at timestamp
  updated_at timestamp
  }
  
table autor {
  id int [pk, increment] // auto-increment
  nome varchar
  aniversario string
  genero varchar
  qtd_livros_publicados int
  
  status LifecycleStatus

  created_at timestamp
  updated_at timestamp
}


Ref: "autor"."id" < "livro"."id_autor"