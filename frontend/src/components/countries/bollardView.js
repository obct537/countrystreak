import { PaddedBox, FullDivider, LabelText } from './displayElements';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export function BollardView(props) {
  const {country, ...rest} = props;

  const ShowBollards = (props) => {
    const { country, ...rest } = props;
    if( country.bollards.length == 0 ) { return <></> }

    return (<div>asjkldf</div>);
  }
  return (
    <PaddedBox>
      <ImageList cols={2}>
        <ShowBollards country={country}/>
      </ImageList>
    </PaddedBox>
  )
}