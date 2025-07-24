function Home() { /*estrutura básica de um Componente Funcional do React*/
    return ( /*retornará o componente Home. Um Componente React é uma função JavaScript/TypeScript, que retorna código HTML e CSS*/
        <> {/*Ao inserir mais de uma tag HTML, todo o código precisa estar envolvido pelo fragment (<> </>), que é um recurso do React, que permite agrupar uma lista de elementos filhos (Tags HTML) sem adicionar nós extras ao DOM */}
            <div style={{/*inserido código CSS inline (dentro da tag HTML), nas 3 divs, utilizamos a propriedade style. Style retorna um Objeto, contendo um ou mais atributos, é então necessário utilizar o duplo par de chaves {{ }} para inserir as propriedades do CSS como atributos do Objeto Style*/
                width: "100w",
                display: "flex",
                justifyContent:"center"
            }}> {/* O primeiro par de chaves (externo) são para retornar uma variável, enquanto o segundo par de chaves (interno) são para criar o Objeto*/}

                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h2>Seja Bem Vinde!</h2>
                        <p>Expresse aqui seus pensamentos e opiniôes</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img
                            src="https://ik.imagekit.io/illaoi/thoughts.gif?updatedAt=1753379622319"
                            alt="Imagem da páginag Home"
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home