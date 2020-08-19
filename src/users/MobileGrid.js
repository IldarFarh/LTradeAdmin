import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/core/styles'

import { EditButton } from 'react-admin'

const useStyles = makeStyles(theme => ({
  root: { margin: '1em' },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 0'
  },
  cardTitleContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardContent: {
    ...theme.typography.body1,
    display: 'flex',
    flexDirection: 'column'
  }
}))

const MobileGrid = ({ ids, data, basePath }) => {
  const classes = useStyles()
  if (!ids || !data) return null
  return (
    <div className={classes.root}>
      {ids.map(id => (
        <Card key={id} className={classes.card}>
          <CardHeader title={
            <div className={classes.cardTitleContent}>
              <h3>{data[id].email}</h3>
              <EditButton
                resource="User"
                basePath={basePath}
                record={data[id]}
              />
            </div>
          } />
          <CardContent className={classes.cardContent}>
            <div>Name: {data[id].name}</div>
            <div>Role: {data[id].role}</div>
            <div>Group: {data[id].group ? data[id].group.name : ''}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

MobileGrid.defaultProps = {
  data: {},
  ids: []
}

export default MobileGrid