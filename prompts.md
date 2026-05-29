# CP3---WebDevelop

# prompts.md

## IAs consultadas

1. Claude
2. ChatGPT
3. Antigravity (Google)

---

## Prompt utilizado

### Prompt inicial

```text
"Nome da IA", por favor, atue como um estudante de engenharia de software que entrou na área a 6 meses. Crie um aplicação web que possa colocar os jogos favoritos de alguém. A aplicação começa com o formulário de login visível e a lista oculta. 

As credenciais corretas são:

* Usuário: aluno
* Senha: fiap2025

e após o login, o usuário pode:

* Adicionar um item ao final da lista;
* Adicionar um item ao início da lista;
* Ver todos os itens exibidos dinamicamente na tela;
* Editar qualquer item individualmente;
* Remover qualquer item individualmente.

Essa aplicação deve ser focada para um usuários que jogam videogame e que querem fazer uma lista dos jogos que ele mais gosta.

Requisitos e Validações:

* Se as credenciais estiverem corretas, a tela de login deve redirecionar para a página da lista. Se estiverem erradas, uma mensagem de erro deve aparecer na tela — não apenas no console. 
* Toda vez que a lista muda, a tela deve ser atualizada automaticamente para refletir o estado atual dos dados. A lista deve conter pelo menos 3 itens iniciais, que serão exibidos ao carregar a primeira vez a página. 
* A aplicação deve ser desenvolvida com HTML, CSS e JavaScript puro — sem frameworks ou bibliotecas externas;
* Os dados devem ser armazenados em um array de strings — sem uso de objetos dentro do array;
* A lógica deve ser organizada em funções nomeadas — sem código solto fora de funções, exceto a declaração de variáveis e a chamada inicial de renderização;
* O JavaScript deve conter somente: Variáveis, Tipos, Operadores, Condicionais, Loops, Arrays, Objetos, Funções, DOM e Eventos, nada mais que isso. Não faça uma estrutura muito complexa;
* Evitar utilizar var, utilize let e const;
* Crie arquivos separados para o HTML, CSS e JavaScript
* Os campos de login não podem ser enviados vazios
* Nenhum item pode ser salvo com o campo vazio — a mensagem de erro deve aparecer na tela
* Ao editar um item, se o usuário cancelar ou confirmar com o campo vazio, o item original deve permanecer sem alteração
* A remoção de um item deve considerar sua posição na lista, não o seu valor — para evitar que itens com o mesmo texto sejam removidos ao mesmo tempo.
```

### Prompt final

Deixe o CSS mais simples, além disso, não utilize var no CSS também e não importe nada de fora, utilize apenas CSS para mudar o visual do site

---

## Comentários sobre as respostas

### Claude

* Resposta mais organizada e próxima dos requisitos pedidos.
* Mostra em tempo real como ficou o site.
* Separação clara entre HTML, CSS e JavaScript.
* Código simples e fácil de entender.
* Pequeno excesso de comentários no JavaScript, mas sem prejudicar o funcionamento.

### ChatGPT

* Estrutura funcional, porém algumas funções ficaram mais complexas do que o necessário para o nível solicitado.
* Em alguns pontos, a organização do DOM poderia ser mais simples.
* Atendeu praticamente todos os requisitos.
* Site ficou muito simples, teria que modificar bastante o CSS.

### Antigravity (Google)

* Interface visual interessante, mas a lógica ficou mais extensa que o necessário.
* Algumas validações ficaram pouco claras.
* Organização do código menos didática comparada às outras respostas.

---

## Justificativa da IA escolhida

A resposta escolhida como base foi a do Claude, pois apresentou o melhor equilíbrio entre simplicidade, organização e cumprimento dos requisitos. O código ficou mais fácil de entender e manter, além de seguir de forma mais fiel a proposta de um estudante iniciante em engenharia de software utilizando apenas HTML, CSS e JavaScript puro.

