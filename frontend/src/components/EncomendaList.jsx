import { EncomendaCard } from "./EncomendaCard";

export function EncomendaList({ encomendas, onDeletar }) {
    return (
        <section style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
            gap: "20px"
        }}>
            {encomendas.map((encomenda) => (
                <EncomendaCard
                    key={encomenda.id}
                    id={encomenda.id}
                    codigo={encomenda.codigo}
                    status={encomenda.status}
                    data={encomenda.created_at}
                    onDeletar={onDeletar}
                />
            ))}
        </section>
    );
}