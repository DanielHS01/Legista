import image1 from "../../assets/arrendamientovivienda.jpg";
import image2 from "../../assets/incidenteDesacato.jpg";
import image3 from "../../assets/compraVehiculo.jpg";
import image4 from "../../assets/conciliacion.jpg";
import image5 from "../../assets/accionDisciplanaria.jpg";
import image6 from "../../assets/prestacionServicios.jpg";
import image7 from "../../assets/impulsoProcesal.jpg";
import image8 from "../../assets/cuotaAlimentaria.jpg";
import image9 from "../../assets/habeasCorpus.jpg";
import doc1 from "../../assets/ContratodeArrendamientodeInmuebleDestinadoaViviendaUrbana.pdf";
import doc2 from "../../assets/IncidentedeDesacatoSencillo.pdf";
import doc3 from "../../assets/ContratoDeCompraVentaDeVehículoSencillo.pdf";
import doc4 from "../../assets/SolicitudConciliacionProcuraduriaSencillo.pdf";
import doc5 from "../../assets/QuejaContraAbogado.pdf";
import doc6 from "../../assets/ContratoDePrestacionDeServiciosAbogado.pdf";
import doc7 from "../../assets/SolicitudImpulsoProcesal.pdf";
import doc8 from "../../assets/DemandaAumentoCuotaAlimentaria.pdf";
import doc9 from "../../assets/FormatoHabeasCorpus.pdf";

interface formatCards {
    href: string;
    document: string;
    name: string;
}

export const FORMAT_CARDS: formatCards[] = [
    {
        href: image1,
        document: doc1,
        name: 'ContratodeArrendamientodeInmuebleDestinadoaViviendaUrbana.pdf'
    },
    {
        href: image2,
        document: doc2,
        name: 'IncidentedeDesacatoSencillo.pdf'
    },
    {
        href: image3,
        document: doc3,
        name: 'ContratoDeCompraVentaDeVehículoSencillo.pdf'
    },
    {
        href: image4,
        document: doc4,
        name: 'SolicitudConciliacionProcuraduriaSencillo.pdf'
    },
    {
        href: image5,
        document: doc5,
        name: 'QuejaContraAbogado.pdf'
    },
    {
        href: image6,
        document: doc6,
        name: 'ContratoDePrestacionDeServiciosAbogado.pdf'
    },
    {
        href: image7,
        document: doc7,
        name: 'SolicitudImpulsoProcesal.pdf'
    },
    {
        href: image8,
        document: doc8,
        name: 'DemandaAumentoCuotaAlimentaria.pdf'
    },
    {
        href: image9,
        document: doc9,
        name: 'FormatoHabeasCorpus.pdf'
    },
]