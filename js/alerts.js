function produtoAtualizadoSucesso() {
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Produto atualizado com sucesso!',
        showConfirmButton: true,
        timer: 1500
    }).then(() => {
        history.go(0);
    })
}

function confirmAtualizacaoProduto() {
    Swal.fire({
        title: 'Confirmar atualização dos dados do produto?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, atualizar!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.value) {
            atualizarDadosQuadrinho();
        }
    })
}

function erroAtualizaçãoProduto() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao atualizar o produto!',
        footer: '<a href>Why do I have this issue?</a>'
    })
}

function erroAtivaçãoLeilao() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao ativar o leilão!',
    })
}

function AtivaçãoLeilao() {
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Leilão criado com sucesso!',
        showConfirmButton: true,
        timer: 2500
    }).then(() => {
        history.go(0);
    })
}

function statusAlteradStatusProdutoSuccesso() {
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Status alterado com sucesso!',
        showConfirmButton: true,
        timer: 2500
    }).then(() => {
        history.go(0);
    })
}

function statusAlteradStatusProdutoErro() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao alterar o status do produto!',
    })
}

function avisoProdutoEmLeilao() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Não é possível alterar dados de produtos em leilão!',
        showConfirmButton: true
    })
}

function alteracaoStatusLeilaoSucesso() {
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Status alterado com sucesso!!',
        showConfirmButton: true,
        timer: 2500
    }).then(() => {
        history.go(0);
    })
}

function alteracaoStatusLeilaoErro() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao alterar o status do leilão!',
        showConfirmButton: true
    })
}

function sucessoInativarProduto() {
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Alteração realizada com sucesso!!',
        showConfirmButton: true,
        timer: 2500
    }).then(() => {
        history.go(0);
    })
}

function erroInativarProduto() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao inativar o produto!',
        showConfirmButton: true
    })
}

function alertCancelarLeilaoComLances() {
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Não é permitido cancelar leilões que já tenham sofrido lances!',
        showConfirmButton: true
    })
}

function alertLeilaoCanceladoSucesso() {
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Leilão  cancelado com sucesso!!',
        showConfirmButton: true,
        timer: 2500
    }).then(() => {
        history.go(0);
    })
}

function confirmColocarLeilaoEmEspera() {
    Swal.fire({
        title: 'Colocar o leilão em espera?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.value) {
            changeStatusAuctionToOnHold();
        }
    })
}

function confirmAtivacaoLeilao() {
    Swal.fire({
        title: 'Ativar o leilão para este produto?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, ativar!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.value) {
            $('#modalCadastrandoLeilao').modal('show');
            $('#modalLeilao').modal('hide');
            enviarDadosLeilao();
        }
    })
}

function confirmAlterarStatusProdutoToActive() {
    Swal.fire({
        title: 'Deseja alterar o status deste produto para Ativo?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, alterar!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.value) {
            $('#modalLeilao').modal('hide');
            $('#modalAviso').modal('hide');

            ChangeStatusToActive()
        }
    })
}

function confirmaCancelamentoLeilao() {
    Swal.fire({
        title: 'Confirmar cancelamento deste leilão?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, cancelar!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.value) {
            cancelarLeilao();
        }
    })
}

function confirmaLeilaoToStatusActive() {
    Swal.fire({
        title: 'Confirmar alteração do status deste leilão para ativo?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, alterar!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.value) {
            changeStatusAuctionToActive();
        }
    })
}

function confirmaLeilaoToStatusInactive() {
    Swal.fire({
        title: 'Confirmar alteração do status deste leilão para inativo?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, alterar!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.value) {
            changeStatusAuctionToInactive();
        }
    })
}

function quadrinhoCadastradoSucesso(){
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Quadrinho cadastrado com sucesso!!',
        showConfirmButton: true,
        timer: 2500
    }).then(() => {
        history.go(0);
    })
}

function quadrinhoCadastradoErro(){
    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Ocorreu um erro ao cadastrar o quadrinho!!',
        showConfirmButton: true
    })
}

function confirmCadastroQuadrinho(){
    Swal.fire({
        title: 'Confirmar cadastro do quadrinho?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, alterar!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.value) {
            $('#modalCarregando').modal('show');
            enviarDadosQuadrinho();        }
    })
}

function confirmarAtualizacaoLeilao(){
    Swal.fire({
        title: 'Confirmar atualização do leilão?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, atualizar!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if (result.value) {
            $('#modalCarregando').modal('show');
            enviarDadosAtualizarLeilao();   
             }
    })
}

function leilaoAtualizadoSucesso(){
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Leilão atualizado com sucesso!!',
        showConfirmButton: true,
        timer: 2500
    }).then(() => {
        history.go(0);
    })
}