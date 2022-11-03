import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
      transition: 'transform 150ms ease, box-shadow 150ms ease',
  
      '&:hover': {
        transform: 'scale(1.01)',
        boxShadow: theme.shadows.md,
      },
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 600,
    },
}));

const ProductCard = (props) => {
    const { classes } = useStyles();
    const {productData} = props;
    
    return (
        <Card key={productData.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={productData.image} />
            </AspectRatio>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
                {productData.date}
            </Text>
            <Text className={classes.title} mt={5}>
                {productData.title}
            </Text>
        </Card>
    )
}

export default ProductCard;