import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import CopperProductionChart from './CooperChart';
import LineChartPIB from './LineChartPIB';
import LineChartWork from './LineChartWork';
import LineChartTPM from './LineChartTPM';
import LineChartIPC from './LineChartIPC';
import BalanzaChart from './ChartBalanza';
import MyButton from './MyButton';
import LithiumChart from './LithiumChart';
import SilverChart from './SilverChart';
import DMacro from './Presentation_Dmacro';
import DolarChart from './DolarChart';
import FMercado from './Presentation_FMercado';
import Presentation from '../HeroSlide/Presentation';
import Presentation2 from '../HeroSlide/Presentation2';
import SupplyDemandChart from  './DemandSupplyChart'
import News from './News';

const Container = styled.div`
    display: flex;
    /* border: 1px dashed red; */
    height:3685vh;
    
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.2;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [

      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: '',
        projectButton:'',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: '',
        projectButton: <Presentation />,
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: '',
        projectButton: <Presentation2 />,

      },

      {
        number: '',
        projectName: '',
        projectDesc:'',
        projectType: '',
        roles: [''],
        projectGraph:  '',
        projectButton: <MyButton/>,
      },
      {
        number: '01',
        projectName: 'Cobre',
        projectDesc: 'El cobre en Chile destaca por su alta producción de 5,328 millones de toneladas métricas, representando el 13% de la producción mundial y posicionándose en el primer lugar a nivel global.',
        projectType: '',
        roles: ['Lider en la producción mundial'],
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <CopperProductionChart/>,
      },

      {
        number: '02',
        projectName: 'Litio',
        projectDesc: "El litio chileno muestra un crecimiento significativo, con una producción de 61 toneladas métricas, lo que equivale al 24% de la producción mundial. Chile se sitúa en la segunda posición en términos de producción mundial de litio.",
        projectType: '',
        roles: ['Crecimiento destacado en la industria'],
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <LithiumChart/>,

      },
      {
        number: '03',
        projectName: 'Plata',
        projectDesc: 'La plata en Chile tiene una producción de 1160 toneladas métricas, con una participación del 4% a nivel mundial y ocupando el séptimo lugar en la producción global. Además, Chile posee aproximadamente el 5% de las reservas mundiales de plata.',
        projectType: '',
        roles: ['Contribución significativa a nivel global'],
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <SilverChart/>,

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: '',
        projectButton: <DMacro />,

      },
      {
        number: '04',
        projectName: 'Producto Interno Bruto',
        projectDesc: 'La minería ha tenido un impacto significativo en el Producto Interno Bruto de Chile, representando entre aproximadamente el 7% y el 14% del PIB total, lo que demuestra su importancia en el crecimiento económico del país.',
        projectType: '',
        roles: ['Impacto de la minería en el Producto Interno Bruto de Chile'], 
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <LineChartPIB />,

      },
      {
        number: '05',
        projectName: 'Tasa de desempleo (Desocupación)',
        projectDesc: "La tasa de desocupación en Chile ha mantenido un promedio de alrededor del 7% durante el período analizado, con un aumento notable en 2020 debido a la pandemia de COVID-19. A partir de 2021, se ha observado una ligera disminución en el desempleo, indicando una gradual recuperación en el mercado laboral.",
        projectType: '',
        roles: ['Evolución del Mercado Laboral y la Industria Minera en Chile'],
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <LineChartWork/>,

      },
      {
        number: '06',
        projectName: 'Tasa política monetaria (TPM)',
        projectDesc: 'La TPM en Chile ha tenido una reducción gradual del 5% al 2% entre 2012 y 2019, seguida de niveles bajos alrededor del 1% debido a la pandemia. Sin embargo, en 2022 hubo un notable aumento al 9%. Estos cambios en la TPM tienen implicaciones en la industria minera, afectando los costos de financiamiento, la competitividad internacional y las decisiones de inversión.',
        projectType: '',
        roles: ['Efectos de la Política Monetaria en la Industria Minera de Chile'],
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <LineChartTPM/>,

      },
      {
        number: '07',
        projectName: 'Índice de Precios al Consumidor (IPC)',
        projectDesc: 'El Índice de Precios al Consumidor (IPC) en Chile ha experimentado fluctuaciones anuales, variando entre 2% y 13%. La industria minera, especialmente el cobre, puede influir en el IPC debido a su impacto en la inflación. En la mayoría de los años, ha habido una inflación moderada, pero se destaca un aumento significativo en 2021 y 2022. Estos datos tienen implicaciones en los costos de producción, los precios de los productos mineros y las decisiones de política monetaria.',
        projectType: '',
        roles: ['Análisis del IPC en Chile: Influencia de la Industria Minera y Sus Implicaciones Económicas'],
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <LineChartIPC />,

      },
      {
        number: '08',
        projectName: 'Balanza comercial',
        projectDesc: 'La balanza comercial de Chile ha experimentado fluctuaciones en el saldo comercial, con un crecimiento en las exportaciones de bienes que alcanzaron los 98.548,33 millones de dólares en 2022, y un aumento en las importaciones que llegaron a los 94.741,20 millones de dólares en el mismo período. Estos datos tienen implicaciones clave para la industria minera, ya que reflejan su contribución a las exportaciones y la demanda interna de bienes importados.',
        projectType: '',
        roles: ['Evolución de Exportaciones e Importaciones y su Impacto en la Industria Minera'],
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <BalanzaChart />,

      },
      {
        number: '09',
        projectName: 'Tipo de Cambio (dólar observado)',
        projectDesc: 'El tipo de cambio observado del dólar en Chile ha experimentado una tendencia al alza, con fluctuaciones anuales y variaciones en años específicos. Esto impacta en las exportaciones y los costos de la industria minera. La volatilidad durante la pandemia del COVID-19 también influyó en el tipo de cambio. Además, existe una relación inversa con el precio del cobre en pesos chilenos. En resumen, el tipo de cambio es un factor clave en la industria minera chilena.',
        projectType: '',
        roles: ['Impacto del tipo de cambio en la industria minera chilena'],
        projectGraph: '',
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <DolarChart/>,
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph:'',
        projectButton: <FMercado />,


      },

      {
        number: '01',
        projectName: 'Aumento en la demanda del bien transado',
        projectDesc: 'Ocurre cuando la demanda global de un bien, como el cobre, se incrementa debido al desarrollo de nuevas tecnologías que lo requieren. Esto provoca un desplazamiento hacia la derecha de la curva de demanda, lo que resulta en un aumento del precio y la cantidad de cobre que Chile puede vender en el mercado internacional. Además, este aumento en la demanda puede impulsar inversiones y generar empleo en la industria minera chilena.',
        projectType: '',
        roles: [''],
        projectGraph: '',
        projectButton: '',


      },
      {
        number: '02',
        projectName: 'Disminución de la oferta del bien transado en el mercado.',
        projectDesc: 'Una disminución en la oferta del bien transado en el mercado puede ocurrir debido a problemas laborales, restricciones ambientales, baja calidad del mineral o dificultades técnicas en la extracción. Esto provoca un desplazamiento hacia la izquierda de la curva de oferta de cobre, lo que resulta en un aumento del precio y una reducción en la cantidad de cobre que Chile puede ofrecer en el mercado internacional.',
        projectType: '',
        roles: [''],
        projectGraph: '',
        projectButton: '',


      },
      {
        number: '03',
        projectName: 'Disminución de la demanda del bien transado en el mercado.',
        projectDesc: 'Una disminución en la oferta del bien transado en el mercado puede ocurrir debido a problemas laborales, restricciones ambientales, baja calidad del mineral o dificultades técnicas en la extracción. Esto provoca un desplazamiento hacia la izquierda de la curva de oferta de cobre, lo que resulta en un aumento del precio y una reducción en la cantidad de cobre que Chile puede ofrecer en el mercado internacional.',
        projectType: '',
        roles: [''],
        projectGraph: '',
        projectButton: '',


      },
      {
        number: '04',
        projectName: 'Aumento de la oferta del bien transado en el mercado.',
        projectDesc: 'Si se descubren nuevas minas de cobre en Chile o se logra aumentar la productividad de las minas existentes mediante mejoras tecnológicas, la oferta de cobre del país podría aumentar. Esto provocaría un desplazamiento hacia la derecha de la curva de oferta, lo que resultaría en una reducción del precio del cobre y un aumento en la cantidad de cobre que Chile puede vender en el mercado internacional. Esta situación podría beneficiar a la economía chilena al incrementar las exportaciones totales, aunque los ingresos por unidad de cobre podrían disminuir debido a la disminución de los precios.',
        projectType: '',
        roles: [''],
        projectGraph: '',
        projectButton: '',


      },

      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <SupplyDemandChart/>,
        projectButton:  '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: '',
        projectButton:  <News/>,

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: '',
        projectButton:  '',

      },
     
      
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    //console.log(vh);

    if (Math.floor(scrollDistance / vh) !== slideNumber 
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
      number={this.workDetails[slideNumber].number}
      projectName={this.workDetails[slideNumber].projectName}
      projectDesc={this.workDetails[slideNumber].projectDesc}
      projectType={this.workDetails[slideNumber].projectType}
      roles={this.workDetails[slideNumber].roles}
      projectGraph={this.workDetails[slideNumber].projectGraph}
      projectButton={this.workDetails[slideNumber].projectButton}
      
      refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
      </Container>
    );
  }
}

export default Work;
