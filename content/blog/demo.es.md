---
title: Artículo de ejemplo
date: 2028-07-05T18:35:00-04:00
image: https://via.placeholder.com/350x350
description: Este es un artículo de ejemplo para ver los estilos del tema.
tags:
  - tag1
  - tag2
  - tag3
  - tag4
  - tag5
math: true
draft: true
---

{{< toc >}}

# Parrafos

Cualquier línea con líneas vacías antes y después de ella es un párrafo,
las líneas consecuentes son unidas.

Necesita una línea vacía para un nuevo párrafo.

# Separadores

---

# Títulos (h1) 

## Títulos (h2) 

### Títulos (h3) 

#### Títulos (h4) 

##### Títulos (h5) 

###### Títulos (h6) 

# Decoración de texto

**Este es texto en negrita**

__Este es texto en negrita__

*Este es texto en cursiva*

_Este es texto en cursiva_

~~Este es texto tachado~~

<https://nt.web.ve>

[Este es un enlace](https://nt.web.ve)

[Este es un enlace con título](https://nt.web.ve "Este es el título!").

# Imágenes

![imagen de prueba](https://via.placeholder.com/500x300)

# Listas

* Cree una lista iniciando con `+`, `-`, o `*`
* Las sublistas se crean agregando una indentación de 2 espacios
  * Esta es una sublista
* Y todo se vuelve normal otra vez

1. Esta es
2. una lista
3. ordenada

Esta
: una lista de definiciones.

Término:
: definición, puede agregar los `:` al término.

# Citas

<!--lint disable no-undefined-references no-shortcut-reference-link-->
Este párrafo tiene una nota de pie[^1].

[^1]: Y aquí está la nota de pie.
<!--lint enable no-undefined-references no-shortcut-reference-link-->

> Las citas de bloque
> son escritas así.
>
> Ellas pueden usar varios párrafos si lo prefiere.
>
> Y **Markdown**!.
>
> -- El Autor

# Tablas

| Título  |   Otro título   |
| ------- | --------------- |
| texto   | texto           |
| texto   | texto           |
| texto   | texto           |

| Título  |   Otro título   |
| :-----: | :-------------: |
|  texto  |      texto      |
|  texto  |      texto      |
|  texto  |      texto      |

| Título  |   Otro título   |
| ------: | --------------: |
|   texto |           texto |
|   texto |           texto |
|   texto |           texto |

# Fórmulas matemáticas

Esta es una fracción inteligente 1/2, este texto tiene una fórmula de línea
\\(\sum\_{n=1}^{\infty} 2^{-n} = 1\\) y esta es una fórmula de bloque:

$$
\sum\_{n=1}^{\infty} 2^{-n} = 1
$$

# Código

Este es `código` de línea.

```go
package main

import "fmt"

func main() {
  fmt.Println("hello, world")
}
```

# Teclado

<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Supr</kbd>

# Notas

{{% note %}}
Esta es una nota
{{% /note %}}

{{% note "Mi título" %}}
Esta es una nota con título personalizado.
{{% /note %}}

# Productos

{{< product-card "demo" >}}

