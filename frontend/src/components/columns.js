import { Button } from "primereact/button";

export const createColumns = (onEdit, onDelete) => [
    {
        field: 'actions',
        header: 'Ações',
        body: (rowData) => (
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Button 
                    icon="pi pi-pencil" 
                    rounded 
                    outlined 
                    className="p-button-warning" 
                    onClick={() => onEdit(rowData)}
                    style={{ marginRight: '0.5rem' }}
                />
                <Button 
                    icon="pi pi-trash" 
                    rounded 
                    outlined 
                    severity="danger"
                    onClick={() => onDelete(rowData)}
                />
            </div>
        )
    },
    {
        field: 'titulo',
        header: 'Título',
        sortable: true
    },
    {
        field: 'autor',
        header: 'Autor',
        sortable: true
    },
    {
        field: 'ano',
        header: 'Ano',
        sortable: true
    },
    {
        field: 'pagina',
        header: 'Páginas',
        sortable: true
    },
    {
        field: 'preco',
        header: 'Preço',
        sortable: true,
        body: (rowData) => `R$ ${rowData.preco?.toFixed(2) || '0,00'}`
    }
]; 