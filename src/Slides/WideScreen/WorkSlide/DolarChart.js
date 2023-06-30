import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DolarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Datos de ejemplo (en porcentaje)
    const data = [
      { Periodo: 2012, Dolar: 486.4 },
      { Periodo: 2013, Dolar: 495.3 },
      { Periodo: 2014, Dolar: 570.3 },
      { Periodo: 2015, Dolar: 654 },
      { Periodo: 2016, Dolar: 676.9 },
      { Periodo: 2017, Dolar: 648.8 },
      { Periodo: 2018, Dolar: 641.2 },
      { Periodo: 2019, Dolar: 703.2 },
      { Periodo: 2020, Dolar: 792.1 },
      { Periodo: 2021, Dolar: 759 },
      { Periodo: 2022, Dolar: 873.1 },
    ];

    // Configuración del gráfico
    const createChart = () => {

    const margin = { top: 20, right: 30, bottom: 130, left: 100 };
    const width = window.innerWidth - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;
    const formatNumber = d3.format(',.0f'); // Utiliza el formato ',.0f' para mostrar números enteros sin decimales


    // Escala x
    const x = d3
      .scaleLinear()
      .domain([d3.min(data, d => d.Periodo), d3.max(data, d => d.Periodo)])
      .range([0, width]);

    // Escala y
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.Dolar) +200])
      .range([height, 0]);

    // Función para generar la línea
    const line = d3
      .line()
      .x(d => x(d.Periodo))
      .y(d => y(d.Dolar));

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
      .attr('y', height + margin.bottom - 30)
      .attr('text-anchor', 'middle')
      .text('Año')
      .style('font-size', '14px')
      .style('font-weight', 'bold');

    // Crear el eje y
    svg.append('g').call(d3.axisLeft(y));

    // Crear líneas horizontales
    svg
      .append('g')
      .selectAll('line')
      .data(d3.range(200, d3.max(data, d => d.Dolar) + 200, 200))
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
      .text('CLP $')
      .style('font-size', '14px')
      .style('font-weight', 'bold');

    // Dibujar la línea
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#CB6D51')
      .attr('stroke-width', 2)
      .attr('d', line)
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

    // Agregar etiquetas con números encima de la línea
    svg
      .selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => x(d.Periodo))
      .attr('y', d => y(d.Dolar) - 10)
      .text(d => `$${formatNumber(d.Dolar)}`)
      .style('font-size', '12px')
      .style('font-weight', 'bold')
      .style('text-anchor', 'middle')
      .attr('opacity', 0)
      .transition()
      .delay(2000)
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
      .attr('opacity', 0)
      .transition()
      .delay(2000)
      .duration(500)
      .attr('opacity', 1)
      .text('Evolución del Dolar Observado en Chile (2012-2022)');
 // Leyenda
 const legendData = [
    { color: '#CB6D51', label: 'Dolar' },

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
    .attr('opacity', 0)
    .transition()
    .delay(2000)
    .duration(500)
    .attr('opacity', 1)
    .style('fill', d => d.color);

  legendItem
    .append('text')
    .attr('x', 20)
    .attr('y', -470)
    .attr('dy', '0.35em')
    .text(d => d.label)
    .attr('opacity', 0)
    .transition()
    .delay(2000)
    .duration(500)
    .attr('opacity', 1)
    .style('font-size', '12px');

    // Footer
svg
.append('text')
.attr('x', width / 2)
.attr('y', height + margin.top + margin.bottom - 50)
.attr('text-anchor', 'middle')
.style('font-size', '12px')
.style('font-weight', 'bold')
.style('cursor', 'pointer') // Agregar estilo de cursor de enlace
.text('Datos extraídos del Banco Central 2023')
.on('click', () => {
  window.open('https://www.bcentral.cl/', '_blank'); // Abrir enlace en una nueva pestaña
});}
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

export default DolarChart;
