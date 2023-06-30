import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent2 from './TextContent2';
import LineChartPIB from './LineChartPIB';
import LineChartWork from './LineChartWork';
import LineChartTPM from './LineChartTPM';
import LineChartIPC from './LineChartIPC';
import BalanzaChart from './ChartBalanza';


const Container = styled.div`
    display: flex;
    /* border: 1px dashed red; */
    height:1485vh;
    
`;

class Work_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.4;
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

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: '',

      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: '',

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
        number: '05',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <LineChartPIB />,

      },
      {
        number: '06',
        projectName: 'Tasa de desempleo (Desocupación)',
        projectDesc: "La tasa de desocupación en Chile ha mantenido un promedio de alrededor del 7% durante el período analizado, con un aumento notable en 2020 debido a la pandemia de COVID-19. A partir de 2021, se ha observado una ligera disminución en el desempleo, indicando una gradual recuperación en el mercado laboral.",
        projectType: 'Datos Macroeconómicos',
        roles: ['Evolución del Mercado Laboral y la Industria Minera en Chile'],
        projectGraph: '',

      },
      {
        number: '07',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <LineChartWork/>,

      },
      {
        number: '08',
        projectName: 'Tasa política monetaria (TPM)',
        projectDesc: 'La TPM en Chile ha tenido una reducción gradual del 5% al 2% entre 2012 y 2019, seguida de niveles bajos alrededor del 1% debido a la pandemia. Sin embargo, en 2022 hubo un notable aumento al 9%. Estos cambios en la TPM tienen implicaciones en la industria minera, afectando los costos de financiamiento, la competitividad internacional y las decisiones de inversión.',
        projectType: 'Datos Macroeconómicos',
        roles: ['Efectos de la Política Monetaria en la Industria Minera de Chile'],
        projectGraph: '',

      },
      {
        number: '09',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <LineChartTPM/>,

      },
      {
        number: '10',
        projectName: 'Índice de Precios al Consumidor (IPC)',
        projectDesc: 'El Índice de Precios al Consumidor (IPC) en Chile ha experimentado fluctuaciones anuales, variando entre 2% y 13%. La industria minera, especialmente el cobre, puede influir en el IPC debido a su impacto en la inflación. En la mayoría de los años, ha habido una inflación moderada, pero se destaca un aumento significativo en 2021 y 2022. Estos datos tienen implicaciones en los costos de producción, los precios de los productos mineros y las decisiones de política monetaria.',
        projectType: 'Datos Macroeconómicos',
        roles: ['Análisis del IPC en Chile: Influencia de la Industria Minera y Sus Implicaciones Económicas'],
        projectGraph: '',

      },
      {
        number: '11',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <LineChartIPC />,

      },
      {
        number: '11',
        projectName: 'Balanza comercial',
        projectDesc: 'La balanza comercial de Chile ha experimentado fluctuaciones en el saldo comercial, con un crecimiento en las exportaciones de bienes que alcanzaron los 98.548,33 millones de dólares en 2022, y un aumento en las importaciones que llegaron a los 94.741,20 millones de dólares en el mismo período. Estos datos tienen implicaciones clave para la industria minera, ya que reflejan su contribución a las exportaciones y la demanda interna de bienes importados.',
        projectType: 'Datos Macroeconómicos',
        roles: ['Evolución de Exportaciones e Importaciones y su Impacto en la Industria Minera'],
        projectGraph: '',

      },
      {
        number: '12',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
        projectGraph: <BalanzaChart />,

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

  changeTextContentBasedOnScroll_2() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent2
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        projectGraph={this.workDetails[slideNumber].projectGraph}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll_2()}
      </Container>
    );
  }
}

export default Work_2;
