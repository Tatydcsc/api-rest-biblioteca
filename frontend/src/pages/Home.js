import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { setLivros } from '../redux/actions/livroActions';
import { InputText } from 'primereact/inputtext';
import { createColumns } from '../components/columns';
import './styles.css';

const Home = () => {
    const livros = useSelector((state) => state.livro.livros);
    const dispatch = useDispatch();
    const [filteredLivros, setFilteredLivros] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const api = axios.create({
            baseURL: 'http://localhost:3001',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const buscarLivros = async () => {
            try {
                const response = await api.get('/livros');
                dispatch(setLivros(response.data));
            } catch (error) {
                console.error('Erro ao buscar livros:', error.response || error);
            }
        };

        buscarLivros();
    }, [dispatch]);

    useEffect(() => {
        const filtered = livros.filter(livro => 
            livro.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            livro.autor.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredLivros(filtered);
    }, [searchTerm, livros]);

    const onEdit = (book) => {
        console.log('Editar livro:', book);
    };

    const onDelete = (book) => {
        console.log('Excluir livro:', book);
    };

    const columns = createColumns(onEdit, onDelete);

    const cardHeader = (
        <div className="card-header">
            <h1>Catálogo de Livros</h1>
            <div className="search-wrapper">
                <div className="p-input-icon-right">
                    <InputText 
                        placeholder="Buscar livros..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <i className="pi pi-search" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="card">
            {cardHeader}
            <DataTable
                value={filteredLivros}
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: '50rem' }}
                emptyMessage="Nenhum livro encontrado."
                columnResizeMode="fit"
                showGridlines
                className="custom-table"
            >
                {columns.map((col) => (
                    <Column 
                        key={col.field} 
                        {...col}
                        style={{ padding: '0 1rem' }}
                    />
                ))}
            </DataTable>
        </div>
    );
};

export default Home;
