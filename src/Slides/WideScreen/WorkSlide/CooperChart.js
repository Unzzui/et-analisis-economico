import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CopperProductionChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { pais: 'Mundo', produccion: 21000 },
      { pais: 'Chile', produccion: 5328 },
      { pais: 'Perú', produccion: 2412 },
      { pais: 'China', produccion: 1665 },
      { pais: 'Estados Unidos', produccion: 1243 },
      { pais: 'Australia', produccion: 804 },
    ];

    const createChart = () => {
      const margin = { top: 20, right: 30, bottom: 130, left: 100 };
      const width = window.innerWidth - margin.left - margin.right;
      const height = 600 - margin.top - margin.bottom;
      const formatNumber = d3.format(',.0f');

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.pais))
        .range([0, width])
        .padding(0.2);

      const yBars = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.produccion) + 2000])
        .range([height, 0]);

      const svg = d3
        .select(chartRef.current)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      svg
        .append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom - 75)
        .attr('text-anchor', 'middle')
        .text('País')
        .style('font-size', '14px')
        .style('font-weight', 'bold');

      svg
        .append('g')
        .call(d3.axisLeft(yBars));

      svg
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -margin.left + 40)
        .attr('text-anchor', 'middle')
        .text('Producción (toneladas métricas)')
        .style('font-size', '14px')
        .style('font-weight', 'bold');

      svg
        .append('g')
        .selectAll('line')
        .data(d3.range(5000, d3.max(data, (d) => d.produccion) + 5000, 5000))
        .enter()
        .append('line')
        .attr('class', 'horizontal-line')
        .attr('x1', 0)
        .attr('y1', (d) => yBars(d))
        .attr('x2', width)
        .attr('y2', (d) => yBars(d))
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3,3');

      svg
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('a')
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
        .attr('opacity', (d) => (d.pais === 'Mundo' ? 1 : 1));

      svg
        .selectAll('.label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'label')
        .attr('x', (d) => x(d.pais) + x.bandwidth() / 2)
        .attr('y', height)
        .text((d) => formatNumber(d.produccion))
        .style('font-size', '12px')
        .style('text-anchor', 'middle')
        .transition()
        .duration(2000)
        .attr('y', (d) => yBars(d.produccion) - 10);

      svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', margin.top / 2)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('font-weight', 'bold')
        .text('Producción de Cobre por País (2022)');

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
        .style('fill', (d) => d.color)
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
        .text((d) => d.label)
        .style('font-size', '12px')
        .transition()
        .delay(2000)
        .duration(500)
        .attr('opacity', 1)
        .style('fill', 'black');
        // Footer
      svg
        .append('text')
        .attr('x', width / 2)
        .attr('y', height + margin.top + margin.bottom - 50)
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('font-weight', 'bold')
        .text('Datos extraídos de Cochilco 2023')
        .on('click', () => {
          window.open('https://www.cochilco.cl/Paginas/Inicio.aspx', '_blank');
        });
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

export default CopperProductionChart;
