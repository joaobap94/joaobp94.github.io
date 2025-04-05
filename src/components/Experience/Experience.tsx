import React from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import { experienceData, ExperienceEntry } from '../../data/experienceData';
import { Container } from 'react-bootstrap';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import './Experience.scss';

DataTable.use(DT);

const experienceColumns = [
  {
    title: 'Tecnologia',
    data: 'technology'
  },
  {
    title: 'Tipo',
    data: 'type'
  },
  {
    title: 'Tempo',
    data: 'time',
    render: (data: string, type: string, row: ExperienceEntry) => {
      if (type === 'sort') {
        return row.sortValue;
      }
      return data;
    }
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="text-start mb-4">Tecnologias</h2>
        <p className="text-start mb-4">
          Para informações detalhadas sobre a minha experiência profissional e projetos, adiciona o meu <a href="https://www.linkedin.com/in/jo%C3%A3o-batista-2a7002136?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a> e solicite o meu CV.
        </p>

        <DataTable 
          data={experienceData} 
          columns={experienceColumns} 
          className="display table table-striped table-bordered"
          options={{
            columns: experienceColumns,
            columnDefs: [
              { targets: 2, type: 'num' }
            ],
            paging: true,
            lengthChange: false,
            pageLength: 10,
            order: [[2, 'desc']],
            language: {
              search: "Pesquisar:",
              lengthMenu: "Mostrar _MENU_ entradas",
              info: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
              infoEmpty: "Mostrando 0 a 0 de 0 entradas",
              infoFiltered: "(filtrado de _MAX_ entradas totais)",
              paginate: {
                first: "Primeiro",
                last: "Último",
                next: "Próximo",
                previous: "Anterior"
              },
              zeroRecords: "Nenhum registo encontrado",
              emptyTable: "Não existem dados disponíveis na tabela"
            }
          }}
        >
          <thead>
            <tr>
              <th>Tecnologia</th>
              <th>Tipo</th>
              <th>Tempo</th>
            </tr>
          </thead>
        </DataTable>
      </Container>
    </section>
  );
};

export default Experience;
