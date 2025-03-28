<script setup>
import { ref, nextTick } from 'vue';

const command = ref('');
const bmo = 
  `                  ˏ______________ˎ
     ˏ________ˎ   | Hello there! |
    /| ______ | /'ˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉˉ´
    ||  O  O  | /
    ||   ᗜ    |   /
    ;| ¯¯¯¯¯¯ |__/
   /|| == ^ o |
  / ||  +  O  |
    |/¯¯¯¯¯¯¯¯/
    ´¯¯|¯¯¯|¯´
       L   L
  `

const output = ref([]);

const terminalOutput = ref(null);

const help = "Available commands: help, clear"
const ls = `<span style="color: green;">discord</span> <span style="color: green;">steam</span> <span style="color: blue;">spotify</span>
`;

const executeCommand = () => {
  if (command.value.trim() !== '') {
    output.value.push(`$ ${command.value}`);
    if (command.value === 'help') {
      output.value.push(help);
    } else if (command.value === 'clear') {
      output.value = [];
    } else if (command.value === 'bmo'){
      output.value.push(bmo)
    } else if(command.value === 'ls'){
      output.value.push(ls)
    }
    else {
      output.value.push(`Command not found: ${command.value}`);
    }
    command.value = '';
    nextTick(() => {
      terminalOutput.value.scrollTop = terminalOutput.value.scrollHeight;
    });
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen w-screen">
    <div class="w-full max-w-6xl mx-auto bg-gray-700 text-green-400 font-vt323 p-4 rounded-lg text-xl">
      <div class="border-b border-green-500 pb-2 mb-2 flex space-x-1 justify-end">
        <div class="bg-red h-5 w-5 border text-white text-center text-xs hover:bg-gray-500">_</div>
        <div class="bg-red h-5 w-5 border text-white text-center pt-px text-xs hover:bg-gray-500">☐</div>
        <div class="bg-red h-5 w-5 border text-white text-center text-xs hover:bg-red-700">X</div>
      </div>
      <div class="h-96 overflow-y-auto" ref="terminalOutput">
        <div v-for="(line, index) in output" :key="index" class="preserve-whitespace" v-html="line"></div>
        <div class="flex items-center">
          <span class="text-green-500">$</span>
          <input v-model="command" @keydown.enter="executeCommand"
          class="bg-transparent border-none focus:outline-none ml-2 flex-grow" autofocus />
        </div>
      </div>
    </div>
  </div>
  </template>
  

<style>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}
.preserve-whitespace {
  white-space: pre;
}
</style>
