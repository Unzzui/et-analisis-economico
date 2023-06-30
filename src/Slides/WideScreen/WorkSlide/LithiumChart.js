import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CopperProductionChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Datos de ejemplo
    const data = [
        { pais: 'Australia', produccion: 46.3 },
        { pais: 'Chile', produccion: 23.9 },
        { pais: 'China', produccion: 16.2 },
        { pais: 'Argentina', produccion: 7.2 },
        { pais: 'Brasil', produccion: 2.2 },
        { pais: 'Zimbague', produccion: 1.4 },
        { pais: 'Portugal', produccion: 1 },
        { pais: 'Estados Unidos', produccion: 1 },
        { pais: 'Resto del Mundo', produccion: 0.6 },
      ];

    // Configuración del gráfico
    const createChart = () => {
      const margin = { top: 20, right: 30, bottom: 130, left: 100 };
      const width = window.innerWidth - margin.left - margin.right;
      const height = 600 - margin.top - margin.bottom;
    const formatNumber = d3.format(',.1f'); // Utiliza el formato ',.0f' para mostrar números enteros sin decimales

    // Escala x
    const x = d3
      .scaleBand()
      .domain(data.map(d => d.pais))
      .range([0, width])
      .padding(0.2);

    // Escala y para las barras
    const yBars = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.produccion) + 5])
      .range([height, 0]);

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
      .call(d3.axisBottom(x));

    // Etiqueta del eje x
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', height + margin.bottom - 75)
      .attr('text-anchor', 'middle')
      .text('País')
      .style('font-size', '14px')
      .style('font-weight', 'bold');

    // Crear el eje y para las barras
    svg.append('g').call(d3.axisLeft(yBars).tickFormat(d => `${d}%`));

    // Etiqueta del eje y para las barras
    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', -margin.left + 40)
      .attr('text-anchor', 'middle')
      .text('Producción %')
      .style('font-size', '14px')
      .style('font-weight', 'bold');
// Crear líneas horizontales
    svg
    .append('g')
    .selectAll('line')
    .data(d3.range(5, d3.max(data, d => d.produccion) + 5, 5))
    .enter()
    .append('line')
    .attr('class', 'horizontal-line')
    .attr('x1', 0)
    .attr('y1', d => yBars(d))
    .attr('x2', width)
    .attr('y2', d => yBars(d))
    .attr('stroke', '#ccc')
    .attr('stroke-width', 1)
    .attr('stroke-dasharray', '3,3');
    // Dibujar las barras de producción
// Dibujar las barras de producción
svg
  .selectAll('.bar')
  .data(data)
  .enter()
  .append('a') // Agregar el elemento <a>
  .append('rect')
  .attr('class', (d) => (d.pais === 'Chile' ? 'bar bar-chile' : 'bar'))
  .attr('x', (d) => x(d.pais))
  .attr('y', height)
  .attr('width', x.bandwidth())
  .attr('height', 0)
  .attr('fill', (d) => (d.pais === 'Chile' ? '#CB6D51' : 'silver'))
  .transition()
  .duration(2000)
  .attr('y', (d) => yBars(d.produccion))
  .attr('height', (d) => height - yBars(d.produccion))
  .attr('opacity', (d) => (d.pais === 'Mundo' ? 1 : 1)); // Reducir la opacidad de la barra de la producción mundial

    // Agregar etiquetas con números encima de las barras
    svg
      .selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => x(d.pais) + x.bandwidth() / 2)
      .attr('y', height)
      .text(d => formatNumber(d.produccion) + '%')
      .style('font-size', '12px')
      .style('font-weight', 'bold')
      .style('text-anchor', 'middle')
      .transition()
      .duration(2000)
      .attr('y', d => yBars(d.produccion) - 10);

    // Título
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', margin.top / 2 - 10)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .text('Producción de Litio por País (2022)');

    // Leyenda
    const legendData = [
      { color: '#CB6D51', label: 'Chile' },
      { color: 'silver', label: 'Otros países' },
    ];

    const legend = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${margin.left},${height + margin.top + 20})`);

    const legendItems = legend.selectAll('.legend-item').data(legendData);

    const legendItem = legendItems
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr('transform', (d, i) => `translate(0, ${i * 20})`);

    legendItem
      .append('rect')
      .attr('x', 0)
      .attr('y', -10)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', d => d.color)
      .attr('opacity', 0)
      .transition()
      .delay(1500)
      .duration(500)
      .attr('opacity', 1);


    legendItem
      .append('text')
      .attr('x', 15)
      .attr('y', 0)
      .attr('dy', '0.35em')
      .attr('opacity', 0)
      .text(d => d.label)
      .style('font-size', '12px')
      .transition()
      .delay(2000)
      .duration(500)
      .attr('opacity', 1)
      .style('fill', d => 'black');

    // Footer
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', height + margin.top + margin.bottom - 50)
      .attr('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('font-weight', 'bold')
      .style('cursor', 'pointer') // Agregar estilo de cursor de enlace
      .text('Datos extraídos de Visual Capitalist 2023')
      .on('click', () => {
        window.open('https://www.visualcapitalist.com/', '_blank'); // Abrir enlace en una nueva pestaña
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


export default CopperProductionChart;
