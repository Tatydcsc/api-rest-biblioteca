import React from 'react';
import { Button } from 'primereact/button';

export const Actions = ({ rowData, type }) => {
    const handleAction = () => {
        if (type === "alterar") {
            console.log("Alterar livro:", rowData);
            // Implementar lógica de alteração
        } else if (type === "excluir") {
            console.log("Excluir livro:", rowData);
            // Implementar lógica de exclusão
        }
    };

    return (
        <Button 
            icon={type === "alterar" ? "pi pi-pencil" : "pi pi-trash"}
            className={`p-button-${type === "alterar" ? "warning" : "danger"} p-button-rounded p-button-sm`}
            onClick={handleAction}
            style={{ marginRight: '5px' }}
        />
    );
}; 