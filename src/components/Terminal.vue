<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue';

const command = ref('');
const output = ref(['']);
const currentDir = ref('~');

const help = 'GNU bash, version 7.8.7(1)-release (x86_64 github-pages)\n' +
  'These shell commands are defined internally. Type `help` to see this List\n\n' +
  'A star(*) next to a name means that the command is disabled.\n\n' +
  'ls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; cd [dir] \n echo [arg] &nbsp; cat [file] \n  clear ';

const ls = '<span class ="text-green-500">discord steam twitter github</span> <span class="text-blue-600">spotify</span>';
const lsspotify = '<span class ="text-green-500">OhJunge Smile Profile</span>';

const spotify = new Map();
spotify.set("OhJunge",'<a class="underline" href="https://open.spotify.com/playlist/4cO48zacSDJ4vFWkUj8BjK?si=d8fc27c3fc584566" target="_blank">OhJunge</a>');
spotify.set("Smile" ,'<a class="underline" href="https://open.spotify.com/playlist/1DfmPQUzrPgGo4NFn3KQiy?si=349cf1e98b0a402c" target="_blank">Smile</a>');
spotify.set("Profile" ,'<a class="underline" href="https://open.spotify.com/user/dodom2002?si=e5275d0d21d242a9" target="_blank">Spotify</a>');

const cats = new Map();
cats.set("discord", "swaggyiroh");
cats.set("steam", '<a class="underline" href="https://steamcommunity.com/id/dodom2002" target="_blank">https://steamcommunity.com/id/dodom2002</a>');
cats.set("twitter", '<a class="underline" href="https://x.com/swaggyiroh" target="_blank">https://x.com/swaggyiroh</a>');
cats.set("github", '<a class="underline" href="https://github.com/swaggyiroh" target="_blank">https://github.com/swaggyiroh</a>');

const terminalInputRef = ref<HTMLInputElement | null>(null);

const executeCommand = () => {
  const cmd = command.value.trim().split(' '); 
  output.value.push('<span class="text-white"><span class="text-green-500">visitor@github-pages</span>:<span class="text-blue-700">'+ currentDir.value +'</span>$</span> '+ ' ' +command.value);

  switch (cmd[0]) {
    case 'help':
      output.value.push(help); 
      break;

    case 'ls':
        if(currentDir.value === '~')
            output.value.push(ls); 
        else if(currentDir.value === '~/spotify')
            output.value.push(lsspotify);
      break;

    case 'clear':
      output.value = []; 
      break;

    case 'cd':
        if (cmd[1] === 'spotify') {
            currentDir.value = '~/spotify'; 
        } else if (cmd.length === 1) {
            currentDir.value = '~'; 
        } else {
            output.value.push(`Directory not found: ${cmd[1]}`); 
        }
    break;

    case 'cat':

    if(currentDir.value == '~'){
        if (cmd.length === 2 && cats.has(cmd[1])) {
            output.value.push(cats.get(cmd[1])); 
        }
    }else if(currentDir.value == '~/spotify'){
        if (cmd.length === 2 && spotify.has(cmd[1])) {
            output.value.push(spotify.get(cmd[1])); 
        }
    }else{
        output.value.push(`File not found: ${cmd[1]}`); 
    }
    break;

    case 'echo':
        let message = ''
        for (let index = 1; index < cmd.length; index++) {
            message += cmd[index];
            message += ' ';
        } 
        output.value.push(message)

    break;

    default:
      output.value.push(`Command not found: ${cmd}`);
      break;
  }

  command.value = '';

  nextTick(() => {
    if (terminalOutput.value) {
      terminalOutput.value.scrollTop = terminalOutput.value.scrollHeight;
    }

    
  });
};
</script>

<template>
  <div class="flex flex-col justify-center items-center w-screen">
    <div class="w-full max-w-6xl mx-auto bg-black text-white font-vt323 p-4 rounded-lg text-xl">
      <div class="border-b border-gray-700 pb-2 mb-2 flex space-x-1 justify-end">
        <div class="bg-red h-5 w-5 border text-white text-center text-xs hover:bg-gray-500">_</div>
        <div class="bg-red h-5 w-5 border text-white text-center pt-px text-xs hover:bg-gray-500">☐</div>
        <div class="bg-red h-5 w-5 border text-white text-center text-xs hover:bg-red-700">X</div>
      </div>
      <div class="h-96 overflow-hidden select-text" ref="terminalOutput">
        <div v-for="(line, index) in output" :key="index" v-html="line"></div>
        <div class="flex items-center">
          <span class="text-white"><span class="text-green-500">visitor@github-pages</span>:<span class="text-blue-700">{{ currentDir }} </span>$</span>
          <input 
            v-model="command" 
            @keydown.enter="executeCommand"
            ref="terminalInputRef"
            class="bg-transparent border-none focus:outline-none ml-2 flex-grow" 
            autofocus 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  div {
    white-space: pre-line;
  }

  .select-text {
    overflow: hidden; 
    position: relative;
  }
  
  h-96 {
    max-height: 24rem;
    display: flex;
    flex-direction: column-reverse;
  }
</style>
