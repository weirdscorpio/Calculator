<template>
  <div class="body">
    <div class="wrapper">
        <div class="result" id="Result">
          {{ rslt }}
        </div>
        <div class="row1">
                <div class="r1 k1" @click="clear()" id="R1K1">
                    AC
                </div>
                <div class="r1 k2" @click="changeSign('plusminus')" id="R1K2">
                    +/-
                </div>
                <div class="r1 k3" @click="perc()" id="R1K3">
                    %
                </div>
                <div class="r1 k4" @click="sign('/')" id="R1K4">
                    /
                </div>
        </div>
        <div class="row2">
                <div class="r2 k1" @click="readval('7')" id="R2K1">
                    7
                </div>
                <div class="r2 k2" @click="readval('8')" id="R2K2">
                    8
                </div>
                <div class="r2 k3" @click="readval('9')" id="R2K3">
                    9
                </div>
                <div class="r2 k4" @click="sign('X')" id="R2K4">
                    X
                </div>
        </div>
        <div class="row3">
                <div class="r3 k1" @click="readval('4')" id="R3K1">
                    4
                </div>
                <div class="r3 k2" @click="readval('5')" id="R3K2">
                    5
                </div>
                <div class="r3 k3" @click="readval('6')" id="R3K3">
                    6
                </div>
                <div class="r3 k4" @click="sign('-')" id="R3K4">
                    -
                </div>
        </div>
        <div class="row4">
                <div class="r4 k1" @click="readval('1')" id="R4K1">
                    1
                </div>
                <div class="r4 k2" @click="readval('2')" id="R4K2">
                    2
                </div>
                <div class="r4 k3" @click="readval('3')" id="R4K3">
                    3
                </div>
                <div class="r4 k4" @click="sign('+')" id="R4K4">
                    +
                </div>
        </div>
        <div class="row5">
                <div class="r5 k1" @click="readval('0')" id="R5K1">
                    0
                </div>
                <div class="r5 k2" @click="readval('.')" id="R5K2">
                    .
                </div>
                <div class="r5 k4" @click="calc()" id="R1K4">
                    =
                </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.body{
    padding-top:5em;
    display:flex;
    color:white;
    background-color: black;
    font-family:Helvetica;
    font-style: normal;
    justify-content: center;
}

.wrapper
{
    display: grid;
    grid-template-rows:20% 14.4% 14.4% 14.4% 14.4% 14.4%;
    background-color:black;
    justify-content: center;
    align-content: center;
    height:28em;
    width:16.5em;
    border-radius: 0.8em;
    border: 2px solid grey;
    margin: 0%;
}

.result
{
    background-color:black;
    width:240px;
    max-width: 240px;
    overflow:scroll;
    overflow-x: hidden;
    overflow-y: hidden;
    font-size: 3em;
    padding-top: 0.8em;
    padding-right: .35em;
    text-align: right;
}

.row1,.row2,.row3,.row4
{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
}

.row5
{
    display: grid;
    grid-template-columns: 50% 25% 25%;
}

.r1, .r2, .r3, .r4, .r5
{
    background-color:rgb(37, 36, 36);
    height: 45px;
    width:45px;
    text-align: center;
    border-radius: 60%;
    margin: 0.5em;
    margin-top: 1em;
    font-size: 1.2em;
    line-height: 2.4em;

}

.r1
{
    background-color:rgb(170, 162, 162);
    color: black;
}

#R1K4{
    color: white;
}

.k4
{
    background-color: orange;
}

#R5K1
{
    width:110px;
    border-radius:4em ;
}

.r1:hover, .r2:hover ,.r3:hover, .r4:hover , .r5:hover{
    background-color: grey;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'addToResult',
      'erase',
      'prefixSign',
      'percentage',
      'addSign',
      'calculate'
    ]),
    readval: function (x) {
      this.addToResult(x)
    },
    clear () {
      this.erase()
    },
    changeSign () {
      this.prefixSign()
    },
    perc () {
      this.percentage()
    },
    sign (x) {
      this.addSign(x)
    },
    calc () {
      this.calculate()
    }
  },
  computed: {
    ...mapGetters([
      'rslt'
    ])
  }
}
</script>
