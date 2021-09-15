import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { PromoData } from '../data/PromoData';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    skeletonMerchantLogo: {
        borderRadius: '5px', width: '50%', display: 'flex'
    },
    skeletonMerchantBackground: {
        height: '100%', width: '100%', display: 'flex', minHeight: 150
    },
    skeletonDays: {
        width: '50', height: 25,
    },
    cardProduct: {
        position: 'relative', display: 'relative', height: "100%", width: 150, borderRadius: 10,
    },
    hotPromo: (props: PromoData) => ({
        textAlign: 'center', fontSize: 10, backgroundColor: props.Color, color: 'white', maxWidth: '50%', borderBottomRightRadius: '10px'
    }),
    titleRowNoPromo: (props: PromoData) => ({
        height: 60, fontSize: 14, color: props.Color, margin: 6
    }),
    titleRowPromo: (props: PromoData) => ({
        height: 35, fontSize: 12, color: props.Color, margin: 6
    }),
    backgroundProduct: {
        display: 'flex', maxHeight: 150
    },
    overlayCard: {
        position: 'absolute',
        bottom: '0px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: '100%'
    },
    cardProductLogo: {
        width: '50%', padding: 2
    }
});


function PromocardLoading(props: any) {
    const classes = useStyles(props);
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <div style={{ marginTop: "24px" }}>
                    <div style={{ height: 30 }}>
                        <Skeleton variant="rect" className={classes.skeletonMerchantLogo} />
                    </div>

                    <Card elevation={4} raised className={classes.cardProduct}>
                        <div style={{ height: 60, margin: 6 }} />
                        <Skeleton variant="rect" className={classes.skeletonMerchantBackground} />
                    </Card>
                    <div style={{ fontSize: 12 }}>
                        <Skeleton className={classes.skeletonDays} />
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

const Promocard = (props: any) => {
    const { promoData } = props;
    const classes = useStyles(promoData);
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <div style={{ marginTop: "24px" }}>
                    <div style={{ height: 30 }}>
                        <img style={{ width: 75 }} src={promoData.MerchantLogo} />
                    </div>
                    <Card elevation={4} raised className={classes.cardProduct}>
                        <Grid container direction="column">
                            <Grid item  >
                                <div>
                                    {promoData.ShowHotPromo ?
                                        <>
                                            <div style={{ height: 25 }}>
                                                <div className={classes.hotPromo}>
                                                    Hot Promo
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <></>
                                    }
                                    {
                                        promoData.ShowHotPromo ?
                                            <Grid container direction="column" className={classes.titleRowPromo}>
                                                <Grid item>{promoData.TitleRow1}</Grid>
                                                <Grid item style={{ fontWeight: 'bold' }}>{promoData.TitleRow2}</Grid>
                                            </Grid>
                                            :
                                            <Grid container direction="column" justifyContent="center"
                                                alignItems="flex-start" className={classes.titleRowNoPromo}>
                                                <Grid item>{promoData.TitleRow1}</Grid>
                                                <Grid item style={{ fontWeight: 'bold' }}>{promoData.TitleRow2}</Grid>
                                            </Grid>
                                    }
                                </div>
                            </Grid>
                            <Grid item >
                                <img className={classes.backgroundProduct} src={promoData.Background} />
                                {promoData.CardLogo != '' ?
                                    <div className={classes.overlayCard}>
                                        <img className={classes.cardProductLogo} src={promoData.CardLogo} />
                                    </div>
                                    :
                                    <></>
                                }
                            </Grid>
                        </Grid>
                    </Card>
                    <div style={{ fontSize: 12 }}>
                        {promoData.Day}
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

const useFixedStyles = makeStyles({
    wrapperPromoThumbnail: {
        flexDirection: 'row',
        marginTop: '20px',
        marginLeft: '3px',
        marginRight: '3px',
    },
    promoThumbnailBase: {
        width: '145px',
        height: '260px',
        borderRadius: '10px',
        position: 'relative',
    },
    promoThumbnailBrandWrapper: {
        height: '15%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '3px',
    },
    promoThumbnailBranding: {
        height: '100%',
        width: '50%',
        objectFit: 'scale-down',
    },
    promoThumbnailCard: {
        height: '85%',
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '1px 1px 2px 2px rgba(0,0,0,.1)',
        borderRadius: '10px',
    },
    promoThumbnailTitleArea: {
        paddingTop: 0,
        height: '30%',
        width: '100%',
        margin: 'auto',
    },
    promoThumbnailHotPromoTag: (props: PromoData) => ({
        backgroundColor: props.Color,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 700,
        borderTopLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        width: '50%',
        height: '25%',
        fontSize: '10px',
        textDecoration: 'none',
        margin: 'auto 0 5px',
    }),
    promoThumbnailTitle: (props: PromoData) => ({
        color: props.Color,
        marginTop: '5px',
        height: 'auto',
        width: '100 %',
        paddingLeft: '9px',
        paddingRight: '9px',
        fontSize: '13px',
    }),
    promoThumbnailTitle1: {
        fontWeight: 'normal',

    },
    promoThumbnailTitle2: {
        fontWeight: 'bold',
        marginTop: '1px',
    },
    promoThumbnailImgArea: (props: PromoData) => ({
        backgroundColor: props.Color,
        display: 'flex',
        height: '70%',
        width: '100%',
        overflow: 'hidden',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
    }),
    promoThumbnailImage: {
        height: '100%',
        maxiWidth: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    promoThumbnailShowCardWrapper: {
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column-reverse',
        height: '60%',
        width: '100%',
        justifyContent: 'flex-start',
        position: 'absolute',
    },
    promoThumbnailShowcard: {
        display: 'flex',
        marginTop: '81%',
        width: '100%',
        height: '21%',
        textAlign: 'center',
        backgroundColor: 'hsla(0,0%,92.5%,.9)',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
    },
    promoThumbnailShowcardImg: {
        height: '40%',
        marginTop: '8px',
        objectFit: 'scale-down',
        objectPosition: 'right',
        marginLeft: '10px',
    },
    promoThumbnailDate: {
        display: ' flex',
        marginTop: '2px',
        flexDirection: 'row',
        padding: 'auto',
        overflow: 'hidden',
    },
    promoThumbnailDateImg: {
        height: '12px',
        marginRight: '5px'
    },
    promoThumbnailDateText: {
        fontSize: '9px',
        fontWeight: 700,
        marginTop: '6px',
    },
});

const PromocardFixed = (props: any) => {
    const { promoData } = props;
    const classes = useFixedStyles(promoData);
    return (
        <div className={classes.wrapperPromoThumbnail}>
            <div>
                <div className={classes.promoThumbnailBase}>
                    <div className={classes.promoThumbnailBrandWrapper}>
                        <img className={classes.promoThumbnailBranding} src={promoData.MerchantLogo} />
                    </div>
                    <a style={{ textDecoration: 'none' }} href="/">
                        <div className={classes.promoThumbnailCard}>
                            <div className={classes.promoThumbnailTitleArea}>
                                <div className={classes.promoThumbnailHotPromoTag}>Hot Promo</div>
                                <div className={classes.promoThumbnailTitle}>
                                    <div className={classes.promoThumbnailTitle1}>{promoData.TitleRow1}</div>
                                    <div className={classes.promoThumbnailTitle2}>{promoData.TitleRow2}</div>
                                </div>
                            </div>


                            <div className={classes.promoThumbnailImgArea}>
                                <img className={classes.promoThumbnailImage} src={promoData.Background} />
                                {promoData.CardLogo ?
                                    <div className={classes.promoThumbnailShowCardWrapper}>
                                        <div className={classes.promoThumbnailShowcard}>
                                            <img className={classes.promoThumbnailShowcardImg} src={promoData.CardLogo} />
                                        </div>
                                    </div>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </a>
                </div>

                <div className={classes.promoThumbnailDate}>
                    <div>
                        <img className={classes.promoThumbnailDateImg} src={'https://www.poinin.com/assets/icon/hours_glass.png'} />
                    </div>
                    <div className={classes.promoThumbnailDateText}>{promoData.Day}</div>
                </div>
            </div>
        </div>
    );
}
export { Promocard, PromocardLoading, PromocardFixed };