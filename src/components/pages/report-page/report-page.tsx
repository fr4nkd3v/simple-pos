import { Button, Header } from '@/components/shared';

export const ReportPage = () => {
  return (
    <div className='p-5'>
      <Header
        title='Reporte'
        icon='graphLi'
      />

      <p>Aqui se mostrará el reporte de ventas</p>

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
