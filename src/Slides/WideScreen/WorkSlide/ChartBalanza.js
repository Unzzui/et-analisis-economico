import React, { useEffect, useRef } from 'react';
import { format } from 'd3';

import * as d3 from 'd3';

const BalanzaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Datos de ejemplo
    const data = [
      { Periodo: 2012, Bienes: 2909.2, Exportaciones: 78283, Importaciones: 75374 },
      { Periodo: 2013, Bienes: 2399, Exportaciones: 77069, Importaciones: 74670 },
      { Periodo: 2014, Bienes: 6730, Exportaciones: 75324, Importaciones: 68593 },
      { Periodo: 2015, Bienes: 3575, Exportaciones: 62120, Importaciones: 58544 },
      { Periodo: 2016, Bienes: 4950, Exportaciones: 60769, Importaciones: 55818 },
      { Periodo: 2017, Bienes: 7490, Exportaciones: 68904, Importaciones: 61413 },
      { Periodo: 2018, Bienes: 4408, Exportaciones: 74838, Importaciones: 70429 },
      { Periodo: 2019, Bienes: 3016, Exportaciones: 68792, Importaciones: 65776 },
      { Periodo: 2020, Bienes: 18916, Exportaciones: 74024, Importaciones: 55107 },
      { Periodo: 2021, Bienes: 10469, Exportaciones: 94774, Importaciones: 84304 },
      { Periodo: 2022, Bienes: 3807, Exportaciones: 98548, Importaciones: 94741 },
    ];

    // Configuración del gráfico

    const createChart = () => {
    const margin = { top: 20, right: 60, bottom: 130, left: 100 };
    const width = window.innerWidth - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;
    const formatNumber = d3.format(',.0f'); // Utiliza el formato ',.3f' para mostrar números con separador de miles y tres dígitos decimales

    // Escala x
    const x = d3
      .scaleBand()
      .domain(data.map(d => d.Periodo))
      .range([0, width])
      .padding(0.2);

    // Escala y para las barras
    const yBars = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.Bienes) + 2000])
      .range([height, 0]);

    // Escala y para las líneas
    const yLines = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.Exportaciones, d.Importaciones))+ 2000])
      .range([height, 0]);

    // Función para generar la línea de Exportaciones
    const lineExportaciones = d3
      .line()
      .x(d => x(d.Periodo) + x.bandwidth() / 2)
      .y(d => yLines(d.Exportaciones));

    // Función para generar la línea de Importaciones
    const lineImportaciones = d3
      .line()
      .x(d => x(d.Periodo) + x.bandwidth() / 2)
      .y(d => yLines(d.Importaciones));

    // Crear el elemento SVG
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .style('font-family','AvenirBook')
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
      .text('Año')
      .style('font-family','AvenirBook')
      .style('font-size', '14px')
      .style('font-weight', 'bold');

    // Crear el eje y para las barras
    svg.append('g').call(d3.axisLeft(yBars));

    // Crear el eje y para las líneas
    svg
      .append('g')
      .attr('transform', `translate(${width},0)`)
      .call(d3.axisRight(yLines));

    // Etiqueta del eje y para las barras
    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', -margin.left + 40)
      .attr('text-anchor', 'middle')
      .style('font-family','AvenirBook')
      .text('Valor')
      .style('font-size', '14px')
      .style('font-weight', 'bold');

    // Etiqueta del eje y para las líneas
    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -height / 2)
      .attr('y', width + margin.right + 40)
      .attr('text-anchor', 'middle')
      .style('font-family','AvenirBook')
      .text('Valor Exportaciones/Importaciones')
      .style('font-size', '14px')
      .style('font-weight', 'bold');

    // Dibujar las barras de bienes
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.Periodo))
      .attr('y', height)
      .attr('width', x.bandwidth())
      .attr('height', 0)
      .style('font-family','AvenirBook')
      .attr('fill', '#CB6D51')  
      .transition()
      .duration(2000)
      .attr('y', d => yBars(d.Bienes))
      .attr('height', d => height - yBars(d.Bienes));

    // Dibujar la línea de Exportaciones
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'gold')
      .attr('stroke-width', 2)
      .attr('d', lineExportaciones)
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

    // Dibujar la línea de Importaciones
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
      .attr('d', lineImportaciones)
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

    // Agregar etiquetas con números encima de las barras
    svg
      .selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => x(d.Periodo) + x.bandwidth() / 2)
      .attr('y', height)
      .text(d => formatNumber(d.Bienes))
      .style('font-family','AvenirBook')
      .style('font-size', '12px')
      .style('font-weight', 'bold')
      .style('text-anchor', 'middle')
      .transition()
      .duration(2000)
      .attr('y', d => yBars(d.Bienes) - 10);

// Agregar etiquetas con números encima de las líneas de exportaciones
svg
  .selectAll('.label-exportaciones')
  .data(data)
  .enter()
  .append('text')
  .attr('class', 'label-exportaciones')
  .attr('x', d => x(d.Periodo) + x.bandwidth() / 2)
  .attr('y', d => yLines(d.Exportaciones) - 10)
  .text(d => formatNumber(d.Exportaciones))
  .style('font-family','AvenirBook')
  .style('font-size', '12px')
  .style('font-weight', 'bold')
  .style('text-anchor', 'middle')
  .attr('opacity', 0)
  .transition()
  .delay(2000)
  .duration(500)
  .attr('opacity', 1);

// Agregar etiquetas con números encima de las líneas de importaciones
svg
  .selectAll('.label-importaciones')
  .data(data)
  .enter()
  .append('text')
  .attr('class', 'label-importaciones')
  .attr('x', d => x(d.Periodo) + x.bandwidth() / 2)
  .attr('y', d => yLines(d.Importaciones) + 30)
  .text(d => formatNumber(d.Importaciones))
  .style('font-size', '12px')
  .style('font-family','AvenirBook')
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
      .style('font-family','AvenirBook')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .text('Evolución de la Balanza Comercial Chile (2012-2022)');

    // Leyenda
    const legendData = [
      { color: '#CB6D51', label: 'Bienes' },
      { color: 'gold', label: 'Exportaciones' },
      { color: 'black', label: 'Importaciones' },
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
      .style('font-family','AvenirBook')
      .attr('dy', '0.35em')
      .text(d => d.label)
      .style('font-size', '12px');

    // Footer
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', height + margin.top + margin.bottom - 40)
      .attr('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('font-weight', 'bold')
      .style('font-family','AvenirBook')
      .style('cursor', 'pointer') // Agregar estilo de cursor de enlace
      .text('Datos extraídos de Cochilco 2023')
      .on('click', () => {
        window.open('https://www.cochilco.cl/Paginas/Inicio.aspx', '_blank'); // Abrir enlace en una nueva pestaña
      });};

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

export default BalanzaChart;
