import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'
const data = [
  {
    source: 'Wind',
    values: [
      { year: 2017, value: 10 },
      { year: 2018, value: 15 },
      { year: 2019, value: 20 },
      { year: 2020, value: 25 },
    ],
  },
  {
    source: 'Solar',
    values: [
      { year: 2017, value: 5 },
      { year: 2018, value: 8 },
      { year: 2019, value: 12 },
      { year: 2020, value: 20 },
    ],
  },
  {
    source: 'Hydroelectric',
    values: [
      { year: 2017, value: 15 },
      { year: 2018, value: 17 },
      { year: 2019, value: 18 },
      { year: 2020, value: 19 },
    ],
  },
  {
    source: 'Biomass',
    values: [
      { year: 2017, value: 7 },
      { year: 2018, value: 7 },
      { year: 2019, value: 6 },
      { year: 2020, value: 5 },
    ],
  },
]
export default function MyLineChart() {
  const ref = useRef()
  const tooltipRef = useRef()

  useEffect(() => {
    const svg = d3.select(ref.current)
    const tooltipDiv = d3.select(tooltipRef.current)

    if (!svg.empty()) {
      svg.selectAll('*').remove() // Clear the SVG on re-render
    }

    const width = svg.node().clientWidth
    const height = svg.node().clientHeight

    const margin = { top: 20, right: 10, bottom: 20, left: 10 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const x = d3.scaleLinear().domain([2017, 2020]).range([0, innerWidth])

    const y = d3.scaleLinear().domain([0, 25]).range([innerHeight, 0])

    const line = d3
      .line()
      .x((d) => x(d.year))
      .y((d) => y(d.value))

    const colors = d3.scaleOrdinal(d3.schemeCategory10)

    const xAxis = d3
      .axisBottom(x)
      .ticks(4)
      .tickFormat(d3.format('.0f'))
      .tickSize(0)

    const yAxis = d3
      .axisLeft(y)
      .ticks(5)
      .tickFormat((d) => `${d} `)
      .tickSize(0)

    const xAxisGroup = g
      .append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(xAxis)

    const yAxisGroup = g.append('g').call(yAxis)

    data.forEach((serie, i) => {
      const path = g
        .append('path')
        .datum(serie.values) // Bind the array of values
        .attr('fill', 'none')
        .attr('stroke', colors(i))
        .attr('strokeWidth', 2)
        .attr('d', line)
        .on('mouseover', (event, value) => {
          tooltipDiv
            .style('visibility', 'visible')
            .html(
              `Year: ${value.year}<br>Value: ${value.value} MWh<br>Source: ${serie.source}`
            )
            .style('top', event.pageY - 10 + 'px')
            .style('left', event.pageX + 10 + 'px')
        })
        .on('mouseout', () => {
          tooltipDiv.style('visibility', 'hidden')
        })

      if (serie.source === 'Wind' || serie.source === 'Hydroelectric') {
        path.attr('stroke-dasharray', '5,5')
      }
    })
  }, [data])

  return (
    <>
      <svg ref={ref} width="100%" height="100%"></svg>
      <div
        ref={tooltipRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          border: '1px solid black',
          backgroundColor: 'white',
          padding: '5px',
        }}
      ></div>
    </>
  )
}
