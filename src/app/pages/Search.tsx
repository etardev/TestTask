import { Grid, Stack } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import DataGrid from '../components/DataGrid';
import TextField from '../components/TextField';
import Typography from '../components/Typography';
import useMovie from './movie/useMovie';
import { Movie } from './search/search';
import useSearch from './search/useSearch';

const Search = (): JSX.Element => {
  const search = useSearch();
  const movie = useMovie();
  const onKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.key === 'Enter' && search.getList();
  };
  const columns: GridColDef[] = [
    {
      field: 'Poster',
      headerName: Movie.POSTER,
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,

      renderCell: (params) => <Avatar alt={params.row.Title} src={params.value} />,
    },
    {
      field: 'Title',
      headerName: Movie.TITLE,
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,
      width: 700,
      renderCell: (params) => (
        <Button variant={'text'} onClick={() => movie.getItem(params.row.imdbID)}>
          {params.value}
        </Button>
      ),
    },
    {
      field: 'Type',
      headerName: Movie.TYPE,
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,
      width: 100,
    },
    {
      field: 'Year',
      headerName: Movie.YEAR,
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,
      width: 100,
    },
    {
      field: 'imdbID',
      headerName: Movie.IMDBID,
      hideable: false,
      hideSortIcons: true,
      sortable: false,
      disableColumnMenu: true,
      width: 100,
    },
    
  ];

  return (
    <Grid container spacing={4} justifyContent="space-between">
      <Grid item xs={12} md={8}>
        <Typography variant="h1">Movie Search</Typography>
      </Grid>
      
      <Grid item xs={12} md={4}>
        <Stack spacing={1} direction={'row'}>
          <TextField
            onChange={(event) => search.setQuery(event.target.value)}
            onKeyUp={(event: React.KeyboardEvent<HTMLDivElement>) => onKeyUp(event)}
            wait={500}
            type={'search'}
            placeholder={'Search'}
            defaultValue={search.data.query}
          />
          <Button variant={'contained'} onClick={() => search.getList()}>
            Search
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <DataGrid
          loading={search.data.loading}
          getRowId={() => Math.random()}
          columns={columns}
          rows={search.data.result?.Search || []}
          pagination
          paginationMode="server"
          rowCount={search.data?.result?.totalResults || 0}
          rowsPerPageOptions={[]}
          autoHeight={true}
          pageSize={10}
          page={search.data.page}
          onPageChange={(page) => search.setPage(page)}
          disableSelectionOnClick={true}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
