import { makeStyles } from '@material-ui/styles';
import { Grid, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PoininAppBar from '../components/Appbar';
import { Promocard, PromocardFixed, PromocardLoading } from '../components/Promocard';
import { DummyPromoDataLong } from '../data/DummyList';
import { PromoData } from '../data/PromoData';
import DialogSessionExpired from '../components/DialogSessionExpired';

const useStyles = makeStyles({
    borderAppBar: {
        border: '1px solid #eeecea'
    },
    gridContainerLoaderPromoNoPadding: {
        overflow: 'hidden', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'
    },
    gridContainerLoaderPromo: {
        overflow: 'hidden', padding: '0% 25% 0% 25%', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', width: '50%'
    },
    gridEndMessage: {
        overflow: 'hidden', padding: '0% 25% 0% 25%', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'
    }
});

function CardRowLoading() {
    return (
        <div style={{ margin: 5 }}>
            <PromocardLoading />
        </div>);
}

function PromoPageDiv(props: any) {
    const { isSessionExpired } = props;
    const dummyPromoData = DummyPromoDataLong;
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [promoItem, setPromoItem] = useState<Array<PromoData>>([]);

    useEffect(() => {
        console.log("populate initial data..")

        setPromoItem(dummyPromoData.slice(0, 20))
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])

    const fetchData = (start: any) => {
        console.log("fetchData..")
        console.log(promoItem.length + "/" + dummyPromoData.length);
        if (promoItem.length >= dummyPromoData.length) {
            setHasMore(false);
            console.log("max list reached");
            return;
        }
        setTimeout(() => {
            console.log("getting more data.. [" + start + "]")
            const tmpArr = dummyPromoData.slice(start, start + 9)
            setPromoItem((currentItems) => currentItems.concat(tmpArr));
        }, 1000);
    }

    const searchFunction = (event: KeyboardEvent, query: String) => {
        if (event.key === 'Enter') {
            if (query === '') {
                console.log("empty query")
                setIsLoading(true);
                setTimeout(() => {
                    setHasMore(true);
                    const tmpArr = dummyPromoData.slice(0, 10);
                    setPromoItem(tmpArr);
                    setIsLoading(false);
                }, 1000);
            }
            if (query.length > 3) {
                console.log(query)
                setIsLoading(true);
                setTimeout(() => {
                    const tmpArr = dummyPromoData.slice(0, 6);
                    setPromoItem(tmpArr);
                    setHasMore(false);
                    setIsLoading(false);
                }, 1000);
            }
        }
    }

    const searchFunctionTimeout = (query: String, isClear: boolean) => {
        if (isClear) {
            setIsLoading(true);
            setTimeout(() => {
                setHasMore(true);
                const tmpArr = dummyPromoData.slice(0, 10);
                setPromoItem(tmpArr);
                setIsLoading(false);
            }, 1000);
        } else {
            setIsLoading(true);
            setTimeout(() => {
                const tmpArr = dummyPromoData.slice(0, 6);
                setPromoItem(tmpArr);
                setHasMore(false);
                setIsLoading(false);
            }, 1000);
        }

    }

    return (
        <div >
            <div className={classes.borderAppBar}>
                <PoininAppBar searchFunction={searchFunction} searchFunctionTimeout={searchFunctionTimeout} />
            </div>
            <Grid container justifyContent='center' spacing={2} >
                <Grid item>
                    <div style={{ flexDirection: 'row-reverse', display: 'flex', width: '100vw', padding: '0% 25% 0% 25%' }} >
                        <Grid container direction='row'>
                            <p style={{ fontSize: 'larger', fontWeight: 700, color: '#000' }}>Promo Terbaik </p>
                            <span style={{ fontSize: 'larger', fontWeight: 700, color: '#000' }} >Hari Ini </span>
                        </Grid>
                        <div style={{ width: '80px', paddingTop: 0, justifyContent: 'center', alignContent: 'center', alignItems: 'center', display: 'flex' }} >
                            <div>
                                <img style={{ width: '30px', margin: 'auto' }} src="https://www.poinin.com/assets/icon/hotpromo.png" alt="logo-trending" />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="flex-start" spacing={2} style={{ backgroundColor: 'rgb(247, 247, 247)', minHeight: '100vh' }}>
                <Grid item>
                    <div>
                        {isLoading ?
                            <div className={classes.gridContainerLoaderPromoNoPadding}>
                                <>
                                    {[0, 0, 0, 0, 0, 0].map((i, index) => {
                                        return (
                                            <div style={{ margin: 10 }} key={index}>
                                                <CardRowLoading />
                                            </div>
                                        );
                                    })}
                                </>
                            </div>
                            :
                            <InfiniteScroll
                                className={classes.gridContainerLoaderPromo}
                                dataLength={promoItem.length}
                                next={() => { fetchData(promoItem.length) }}
                                hasMore={hasMore}
                                loader={
                                    <>
                                        {[0, 0, 0, 0, 0, 0].map((i, index) => {
                                            return (
                                                <div style={{ margin: 10 }} key={index}>
                                                    <CardRowLoading />
                                                </div>
                                            );
                                        })}
                                    </>
                                }
                                endMessage={
                                    <></>
                                }
                            >
                                <>
                                    {promoItem.map((i, index) => {
                                        return (
                                            <div style={{ margin: 10 }} key={index}>
                                                <PromocardFixed promoData={i} />
                                            </div>
                                        );
                                    })}
                                </>
                            </InfiniteScroll>

                        }
                    </div>
                </Grid>
            </Grid>
            {isSessionExpired ?
                <DialogSessionExpired />
                :
                <></>
            }
        </div >
    );
}

export { PromoPageDiv };