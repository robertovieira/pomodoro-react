import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { CyclesContext } from '../../contexts/CyclesContext'
import { HistoryList, HystoryContainer, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HystoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                      locale: ptBr,
                    })}
                  </td>
                  <td>
                    {cycle.fineshedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}

                    {!cycle.fineshedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HystoryContainer>
  )
}
