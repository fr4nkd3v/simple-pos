import { Button, Header } from '@/components/shared';
import { KpiGroup } from './components/kpi-group';
import { LeaderBoard } from './components/leader-board';
import { TableSales } from './components/table-sales';

export const ReportPage = () => {
  return (
    <div className='space-y-6 p-5'>
      <Header
        title='Reporte'
        icon='graphLi'
      />

      <KpiGroup />

      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <LeaderBoard />
      </div>

      <TableSales />

      <Button
        onClick={() => {
          localStorage.removeItem('orders');
        }}
      >
        remove local data
      </Button>
    </div>
  );
};
