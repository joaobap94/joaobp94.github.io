export interface GradeEntry {
  id: number;
  title: string;
  category: string; 
  percentage: number; 
  grade: number; 
}

export const gradesData: GradeEntry[] = [
  { id: 1, title: 'Arquitectura de Computadores e Sist. Operativos', category: 'redes', percentage: 65, grade: 13 },
  { id: 2, title: 'Redes de Computadores', category: 'redes', percentage: 70, grade: 14 },
  { id: 3, title: 'Bases de Dados I', category: 'sql', percentage: 75, grade: 15 },
  { id: 4, title: 'Sistemas Web', category: 'web', percentage: 55, grade: 11 },
  { id: 5, title: 'Sistemas Multimédia', category: 'multimedia', percentage: 80, grade: 16 },
  { id: 6, title: 'Fundamentos de Programação', category: 'java', percentage: 90, grade: 18 },
  { id: 7, title: 'Linguagens de Programação', category: 'java', percentage: 70, grade: 14 },
  { id: 8, title: 'Programação Orientada aos Objetos', category: 'java', percentage: 80, grade: 16 },
  { id: 9, title: 'Análise e Concepção de Sistemas de Informação', category: 'gest', percentage: 80, grade: 16 },
  { id: 10, title: 'Integração de Sistemas I', category: 'web', percentage: 100, grade: 20 },
  { id: 11, title: 'Bases de Dados II', category: 'sql', percentage: 90, grade: 18 },
  { id: 12, title: 'Serviços de Redes', category: 'redes', percentage: 70, grade: 14 },
  { id: 13, title: 'Tecnologias da Internet', category: 'web', percentage: 95, grade: 19 },
  { id: 14, title: 'Aplicações Multimédia', category: 'multimedia', percentage: 90, grade: 18 },
  { id: 15, title: 'Administração e Segurança de Sistemas e de Redes', category: 'redes', percentage: 70, grade: 14 },
  { id: 16, title: 'Integração de Sistemas II', category: 'microsoft', percentage: 55, grade: 11 },
  { id: 17, title: 'Sistemas de Informação para a Gestão', category: 'gest', percentage: 70, grade: 14 },
  { id: 18, title: 'Desenvolvimento de Dispositivos Móveis', category: 'java', percentage: 70, grade: 14 },
  { id: 19, title: 'Aplicações de Código Aberto', category: 'web', percentage: 75, grade: 15 },
  { id: 20, title: 'Projeto Aplicado (Estágio)', category: 'java', percentage: 85, grade: 17 },
  { id: 21, title: 'Desenvolvimento de Aplicações na Internet', category: 'microsoft', percentage: 90, grade: 18 },
];

export interface FilterCategory {
  name: string;
  filter: string;
  colorClass?: string; 
}

export const filterCategories: FilterCategory[] = [
  { name: 'Todas', filter: '*' },
  { name: 'Programação Web', filter: 'web', colorClass: 'web-color' },
  { name: 'Java / Mobile', filter: 'java', colorClass: 'java-color' },
  { name: 'MySQL / PLSQL', filter: 'sql', colorClass: 'sql-color' },
  { name: 'Photoshop / Flash', filter: 'multimedia', colorClass: 'multimedia-color' },
  { name: 'C#, Azure, Web Services', filter: 'microsoft', colorClass: 'microsoft-color' },
  { name: 'Administração de Redes', filter: 'redes', colorClass: 'redes-color' },
  { name: 'Gestão', filter: 'gest', colorClass: 'gest-color' },
]; 