<template>
<div class="container">
    <Header className="header1">demo</Header>
    <div class="content">
        <Side className="leftSide">
            <Link className="a" href="https://www.google.com/">google</Link>
            <Link className="a" href="https://www.baidu.com/">baidu</Link>
            <Link className="a" href="https://www.vjshi.com/">vjshi</Link>
        </Side>
        <Side className="rightSide">

        </Side>
    </div>
    
</div>

</template>

<script>
import { Header, Side } from '../../layout'
import { Link } from '../../components'

export default {
    name:'Home',
    components: {
        Header,
        Side,
        Link
    }
}
</script>

<style>
.content{
    display:flex;
    
}
.leftSide {
    display: flex;
    flex-direction: column;
}
.rightSide {
    display: flex;
    flex:1;
}
.header1 {
    padding: 20px;
    text-align: center;
}
.a {
    margin-bottom: 10px;
}

</style>