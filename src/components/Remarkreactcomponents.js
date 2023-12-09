import React, { createElement } from 'react'
import remark from 'remark'
import remarkReact from 'remark-react'

function createTableCellComponent (tagName) {
  return class TableCell extends React.Component {
    render () {
      const style = { textAlign: this.props.align }
      const props = { ...this.props, style }
      return createElement(tagName, props, this.props.children)
    }
  }
}

const options = {
  remarkReactComponents: {
    td: createTableCellComponent('td'),
    th: createTableCellComponent('th')
  }
}
const processor = remark().use(remarkReact, options)