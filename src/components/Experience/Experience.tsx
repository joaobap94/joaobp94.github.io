import React from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';
import 'datatables.net-responsive-bs5';
import { experienceData, ExperienceEntry } from '../../data/experienceData';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import './Experience.scss';

DataTable.use(DT);

// Mapping from Portuguese data values to translation keys
const typeTranslationMap: { [key: string]: string } = {
  'Desenvolvimento': 'experience_table.type_development',
  'Controlo de Versões': 'experience_table.type_version_control',
  'Base de dados': 'experience_table.type_database',
  'Sistema Operativo': 'experience_table.type_os',
  'Metodologias': 'experience_table.type_methodologies',
  'Reporting': 'experience_table.type_reporting',
  'Servidor Web': 'experience_table.type_web_server',
  'Cloud': 'experience_table.type_cloud',
  'Arquiteturas': 'experience_table.type_architectures',
  'Ferramentas': 'experience_table.type_tools'
};

const Experience: React.FC = () => {
  const { t, i18n } = useTranslation();

  const experienceColumns = [
    {
      title: t('experience_table.header_technology'), 
      data: 'technology',
      responsivePriority: 1 
    },
    {
      title: t('experience_table.header_type'), 
      data: 'type',
      render: (data: string) => {
        const translationKey = typeTranslationMap[data] || '';
        return t(translationKey, { defaultValue: data });
      },
      responsivePriority: 3 
    },
    {
      title: t('experience_table.header_time'), 
      data: 'time',
      render: (data: string, type: string, row: ExperienceEntry) => {
        if (type === 'sort') {
          return row.sortValue;
        }
        // Translate time units
        if (typeof data === 'string') {
            const parts = data.split(' ');
            if (parts.length === 2) {
                const count = parseInt(parts[0], 10);
                const unit = parts[1].toLowerCase();
                if (!isNaN(count)) {
                    if (unit === 'ano') {
                        return `${count} ${t('time_units.year', { count: count })}`;
                    } 
                    else if (unit === 'anos'){
                      return `${count} ${t('time_units.year_plural', { count: count })}`;
                    }
                    else if (unit === 'mês') {
                        return `${count} ${t('time_units.month', { count: count })}`;
                    }
                    else if (unit === 'meses'){
                      return `${count} ${t('time_units.month_plural', { count: count })}`;
                    }
                }
            }
        }
        return data; // Fallback to original data if parsing fails
      },
      responsivePriority: 2 // Second priority
    },
  ];

  const dataTableLanguageOptions = {
    search: t('datatable.search'),
    lengthMenu: t('datatable.lengthMenu'),
    info: t('datatable.info'),
    infoEmpty: t('datatable.infoEmpty'),
    infoFiltered: t('datatable.infoFiltered'),
    paginate: t('datatable.paginate', { returnObjects: true }) as { [key: string]: string },
    zeroRecords: t('datatable.zeroRecords'),
    emptyTable: t('datatable.emptyTable'),
  };

  return (
    <section id="experience" className="py-5">
      <Container>
        <h2 className="text-start mb-4">{t('experience_section.title')}</h2>
        
        <p className="text-start mb-4">
          {t('experience_section.linkedin')}
        </p>

        <DataTable 
          key={i18n.language}
          data={experienceData} 
          columns={experienceColumns} 
          className="display table table-striped table-bordered dt-responsive nowrap"
          options={{
            columnDefs: [
              { targets: 2, type: 'num' }
            ],
            paging: true,
            lengthChange: false,
            pageLength: 10,
            order: [[2, 'desc']],
            language: dataTableLanguageOptions,
            responsive: true
          } as any}
        >
          <thead>
            <tr>
              <th>{t('experience_table.header_technology')}</th>
              <th>{t('experience_table.header_type')}</th>
              <th>{t('experience_table.header_time')}</th>
            </tr>
          </thead>
        </DataTable>
      </Container>
    </section>
  );
};

export default Experience;
