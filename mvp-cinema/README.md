# CineAcademy - Sprint 1 
O projeto trata-se de um sistema de gerenciamento de Cinema, onde envolve desde a o gerenciamento de filmes, sessões, salas e demais funcionalidades por parte dos funcionários até a compra de ingresso realizada por usuários clientes.

## Casos de uso (UML)

![image](https://user-images.githubusercontent.com/83462514/188255653-ca6ba75d-b143-41d6-b686-6da6310b0b00.png)
![image](https://user-images.githubusercontent.com/83462514/188255681-bbfdfbf0-6bbf-4f29-bbe9-489cea3cc616.png)

## Regras de negócio 
* O horário da sessão deve ser válido apenas a partir do horário X que abre o cinema e no máximo até o horário Y que fecha o cinema (horários definidos por nós mesmo)
* Deve ser necessário verificar se já não existe uma sessão acontecendo naquela sala - verificar o range de tempo do filme e o horário das sessões da sala naquele dia - só é possível criar sessão para aquela sala se o horário da sessão anterior + o tempo do filme não atingir o horário da sessão que quer criar
* O usuário (cliente) não pode comprar ingresso de uma sessão que já encerrou
* A compra de vários ingressos só pode ser feita para a mesma sessão. Caso o cliente queira comprar ingressos para outra sessão, deve realizar uma nova compra.
* Apenas podem ser vendidos ingressos para sessões com poltronas disponíveis

