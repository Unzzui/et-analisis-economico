import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SupplyDemandChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Datos de ejemplo
    const data = [
      { price: 0, demand: 10000, supply: 1000 },
      { price: 5, demand: 9000, supply: 2500 },
      { price: 10, demand: 8000, supply: 4000 },
      { price: 18, demand: 6400, supply: 6400 },
      { price: 25, demand: 5000, supply: 8500 },
      { price: 30, demand: 4000, supply: 10000 },
      { price: 35, demand: 3000, supply: 11500 },
      { price: 40, demand: 2000, supply: 13000 },
      { price: 45, demand: 1000, supply: 14500 },
      { price: 50, demand: 0, supply: 16000 },



    ];

    // Configuración del gráfico
    const createChart = () => {
      const margin = { top: 20, right: 80, bottom: 130, left: 100 };
      const width = window.innerWidth - margin.left - margin.right;
      const height = 600 - margin.top - margin.bottom;
      const formatNumber = d3.format(',.0f');

      // Escala x
      const x = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => Math.max(d.demand, d.supply))])
        .range([0, width]);

      // Escala y
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.price) + 4])
        .range([height, 0]);

      // Función para generar la línea de demanda
      const demandLine = d3
        .line()
        .x(d => x(d.demand))
        .y(d => y(d.price));

      // Función para generar la línea de oferta
      const supplyLine = d3
        .line()
        .x(d => x(d.supply))
        .y(d => y(d.price));

      // Crear el elemento SVG
      const svg = d3
        .select(chartRef.current)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .style('font-family', 'AvenirRoman')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      // Crear el eje x
      svg
        .append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x).tickFormat(d3.format('d')));

      // Etiqueta del eje x
      svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom - 75)
        .attr('text-anchor', 'middle')
        .text('Cantidad')
        .style('font-size', '14px')
        .style('font-weight', 'bold');

      // Crear el eje y
      svg.append('g').call(d3.axisLeft(y));

      // Crear líneas horizontales
      svg
        .append('g')
        .selectAll('line')
        .data(d3.range(2, d3.max(data, d => d.price) + 2, 2))
        .enter()
        .append('line')
        .attr('class', 'horizontal-line')
        .attr('x1', 0)
        .attr('y1', d => y(d))
        .attr('x2', width)
        .attr('y2', d => y(d))
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3,3');

      // Etiqueta del eje y
      svg
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -margin.left + 40)
        .attr('text-anchor', 'middle')
        .text('Precio')
        .style('font-size', '14px')
        .style('font-weight', 'bold');

      // Dibujar la línea de demanda
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#CB6D51')
        .attr('stroke-width', 2)
        .attr('d', demandLine)
        .attr('stroke-dasharray', function () {
          const totalLength = this.getTotalLength();
          return totalLength + ' ' + totalLength;
        })
        .attr('stroke-dashoffset', function () {
          const totalLength = this.getTotalLength();
          return totalLength;
        })
        .transition()
        .duration(2000)
        .attr('stroke-dashoffset', 0);

      // Dibujar la línea de oferta
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#3498DB')
        .attr('stroke-width', 2)
        .attr('d', supplyLine)
        .attr('stroke-dasharray', function () {
          const totalLength = this.getTotalLength();
          return totalLength + ' ' + totalLength;
        })
        .attr('stroke-dashoffset', function () {
          const totalLength = this.getTotalLength();
          return totalLength;
        })
        .transition()
        .duration(2000)
        .attr('stroke-dashoffset', 0);

      // Agregar etiquetas con números encima de la línea de demanda
      svg
        .selectAll('.demand-label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'demand-label')
        .attr('x', d => x(d.demand))
        .attr('y', d => y(d.price) - 10)
        .text(d => formatNumber(d.price))
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .style('text-anchor', 'middle')
        .attr('opacity', 0)
        .transition()
        .delay(2000)
        .duration(500)
        .attr('opacity', 1);

      // Agregar etiquetas con números encima de la línea de oferta
      svg
        .selectAll('.supply-label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'supply-label')
        .attr('x', d => x(d.supply))
        .attr('y', d => y(d.price) - 10)
        .text(d => formatNumber(d.price))
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .style('text-anchor', 'middle')
        .attr('opacity', 0)
        .transition()
        .delay(2000)
        .duration(500)
        .attr('opacity', 1);

      // Dibujar el punto de equilibrio
      const equilibriumPoint = { price: 18, demand: 6400, supply: 6400 };
      svg
        .append('circle')
        .attr('cx', x(equilibriumPoint.demand))
        .attr('cy', y(equilibriumPoint.price))
        .attr('r', 4)
        .attr('fill', 'black')
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);

      // Etiqueta de punto de equilibrio
      svg
        .append('rect')
        .attr('x', x(equilibriumPoint.demand) - 53)
        .attr('y', y(equilibriumPoint.price) + 30)
        .attr('width', 105)
        .attr('height', 20)
        .attr('rx', 10)
        .attr('fill', '#F5F5F5')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);

      // Dibujar la línea central
      svg
        .append('line')
        .attr('x1', x(equilibriumPoint.demand))
        .attr('y1', y.range()[0])
        .attr('x2', x(equilibriumPoint.demand))
        .attr('y2', y.range()[1])
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3,3');

      svg
        .append('text')
        .attr('x', x(equilibriumPoint.demand))
        .attr('y', y(equilibriumPoint.price) + 45)
        .attr('text-anchor', 'middle')
        .text('Punto de Equilibrio')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .style('fill', '#333')
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);


        const aumentoDemandPoint = { price: 5, demand: 9000, supply: 2500 };
        svg
        .append('circle')
        .attr('cx', x(aumentoDemandPoint.demand))
        .attr('cy', y(aumentoDemandPoint.price))
        .attr('r', 4)
        .attr('fill', 'black')
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);

      // Etiqueta de punto de equilibrio
      svg
        .append('rect')
        .attr('x', x(aumentoDemandPoint.demand) - 53)
        .attr('y', y(aumentoDemandPoint.price) + 30)
        .attr('width', 105)
        .attr('height', 20)
        .attr('rx', 10)
        .attr('fill', '#F5F5F5')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);

      // Dibujar la línea central
      svg
        .append('line')
        .attr('x1', x(aumentoDemandPoint.demand))
        .attr('y1', y.range()[0])
        .attr('x2', x(aumentoDemandPoint.demand))
        .attr('y2', y.range()[1])
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3,3');

      svg
        .append('text')
        .attr('x', x(aumentoDemandPoint.demand))
        .attr('y', y(aumentoDemandPoint.price) + 45)
        .attr('text-anchor', 'middle')
        .text('Aumento Demanda')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .style('fill', '#333')
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);


        const disminucióndemandapoint = { price: 40, demand: 2000, supply: 13000 };

        svg
        .append('circle')
        .attr('cx', x(disminucióndemandapoint.demand))
        .attr('cy', y(disminucióndemandapoint.price))
        .attr('r', 4)
        .attr('fill', 'black')
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);

      // Etiqueta de punto de equilibrio
      svg
        .append('rect')
        .attr('x', x(disminucióndemandapoint.demand) - 53)
        .attr('y', y(disminucióndemandapoint.price) + 30)
        .attr('width', 105)
        .attr('height', 20)
        .attr('rx', 10)
        .attr('fill', '#F5F5F5')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);

      // Dibujar la línea central
      svg
        .append('line')
        .attr('x1', x(disminucióndemandapoint.demand))
        .attr('y1', y.range()[0])
        .attr('x2', x(disminucióndemandapoint.demand))
        .attr('y2', y.range()[1])
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3,3');

      svg
        .append('text')
        .attr('x', x(disminucióndemandapoint.demand))
        .attr('y', y(disminucióndemandapoint.price) + 45)
        .attr('text-anchor', 'middle')
        .text('Disminución Demanda')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .style('fill', '#333')
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);

        const aumentoofertapoint =  { price: 45, demand: 1000, supply: 14500 };
        svg
        .append('circle')
        .attr('cx', x(aumentoofertapoint.supply))
        .attr('cy', y(aumentoofertapoint.price))
        .attr('r', 4)
        .attr('fill', 'black')
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);

      // Etiqueta de punto de equilibrio
      svg
        .append('rect')
        .attr('x', x(aumentoofertapoint.supply) - 53)
        .attr('y', y(aumentoofertapoint.price) + 30)
        .attr('width', 105)
        .attr('height', 20)
        .attr('rx', 10)
        .attr('fill', '#F5F5F5')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);

      // Dibujar la línea central
      svg
        .append('line')
        .attr('x1', x(aumentoofertapoint.supply))
        .attr('y1', y.range()[0])
        .attr('x2', x(aumentoofertapoint.supply))
        .attr('y2', y.range()[1])
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3,3');

      svg
        .append('text')
        .attr('x', x(aumentoofertapoint.supply))
        .attr('y', y(aumentoofertapoint.price) + 45)
        .attr('text-anchor', 'middle')
        .text('Aumento Oferta')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .style('fill', '#333')
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);



        const disminucionoferta =  { price: 5, demand: 9000, supply: 2500 };
        svg
        .append('circle')
        .attr('cx', x(disminucionoferta.supply))
        .attr('cy', y(disminucionoferta.price))
        .attr('r', 4)
        .attr('fill', 'black')
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);

      // Etiqueta de punto de equilibrio
      svg
        .append('rect')
        .attr('x', x(disminucionoferta.supply) - 53)
        .attr('y', y(disminucionoferta.price) + 30)
        .attr('width', 105)
        .attr('height', 20)
        .attr('rx', 10)
        .attr('fill', '#F5F5F5')
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);

      // Dibujar la línea central
      svg
        .append('line')
        .attr('x1', x(disminucionoferta.supply))
        .attr('y1', y.range()[0])
        .attr('x2', x(disminucionoferta.supply))
        .attr('y2', y.range()[1])
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3,3');

      svg
        .append('text')
        .attr('x', x(disminucionoferta.supply))
        .attr('y', y(disminucionoferta.price) + 45)
        .attr('text-anchor', 'middle')
        .text('Disminución Oferta')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .style('fill', '#333')
        .attr('opacity', 0)
        .transition()
        .delay(2500)
        .duration(500)
        .attr('opacity', 1);
      // Título
      svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .text('Oferta y Demanda (Caso Hipotético)')
        .attr('opacity', 0)
        .transition()
        .delay(2000)
        .duration(500)
        .attr('opacity', 1);

      // Leyenda
      const legendData = [
        { color: '#CB6D51', label: 'Demanda' },
        { color: '#3498DB', label: 'Oferta' },
      ];

      const legend = svg
        .append('g')
        .attr('class', 'legend')
        .attr('transform', `translate(${margin.left},${height + margin.top + 20})`); // Ajusta las coordenadas aquí

      const legendItems = legend.selectAll('.legend-item').data(legendData);

      const legendItem = legendItems
        .enter()
        .append('g')
        .attr('class', 'legend-item')
        .attr('transform', (d, i) => `translate(0, ${i * 20})`);

      legendItem
        .append('circle')
        .attr('cx', 10)
        .attr('cy', -470)
        .attr('r', 5)
        .style('fill', d => d.color);

      legendItem
        .append('text')
        .attr('x', 20)
        .attr('y', -470)
        .attr('dy', '0.35em')
        .text(d => d.label)
        .style('font-size', '12px');

      // Footer
      svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', height + margin.top + margin.bottom - 50)
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .text('Gráfico elaboración propia 2023.')
   
    };

    createChart();

    const handleResize = () => {
      d3.select(chartRef.current).select('svg').remove();
      createChart();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}
    ></div>
  );
};

export default SupplyDemandChart;
